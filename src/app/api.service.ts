import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, from, Observable, of} from 'rxjs';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {flatMap, map} from 'rxjs/operators';
import {Note} from './chrono/chrono.component';
import {Octokit} from '@octokit/rest';
import {AlertService} from './alert.service';

export class Message {
  id: string;
  age: number;
  date: Date;
  text: string;
}

export function encryptP(pass: string, payload: string) {
  return from(encrypt(pass, payload)).pipe(flatMap(n => n))
    ;
}

export function decryptP(pass: string, s: string) {
  return from(decrypt(pass, s)).pipe(flatMap(n => n));
}

const encryptedGHToken = '76ffb769ae02d5333b7c2195CokTlfRFy/6OB3H+8YfIPZaRlW+fg8k+mzh34McdL2JElZj3x05SdFKnTnPZ/oRI9tMotT84jxM=';

const gh_key_path = 'gh_key.txt';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {
  private apiUrl = environment.server;
  gh_key: BehaviorSubject<string> = new BehaviorSubject(null);

  private messages: Message[] = [];

  constructor(private http: HttpClient, private as: AlertService) {
  }

  ngOnInit() {
    // this.getGHKey();
  }

  getMessages(): Observable<Message[]> {
    return of(this.messages);
  }

  getMessage(id: number): Observable<Message> {
    return of(this.messages[id]);
  }

  addMessage(message: Message): Observable<Message> {
    this.messages.push(message);

    return of(message);
  }

  sendNote(pass: string, title: string, text: string, releaseDate: number): Observable<Object> {
    return encryptP(pass, title)
      .pipe(flatMap(titleEnc =>
        from(encrypt(pass, text))
          .pipe(flatMap(textEnc =>
            this.http.post(this.apiUrl + '/note/' + name, {
              'pass': pass,
              'release': releaseDate,
              'title': titleEnc,
              'text': textEnc
            })
          ))
      ));
  }

  getNotes(pass: string): Observable<Note> {
    return this.http
      .post(this.apiUrl + '/notes/' + name, {'pass': pass})
      // .pipe(catchError(this.errorHandler))
      .pipe(flatMap(value => value as Note[]))
      .pipe(
        map(n => decryptP(pass, n.title)
          .pipe(map(title => {
            n.title = title;
            return n;
          }))
        )
      )
      .pipe(flatMap(n => n))
      .pipe(
        map(n => decryptP(pass, n.text)
          .pipe(map(text => {
            n.text = text;
            return n;
          }))
        )
      )
      .pipe(flatMap(n => n));
  }

  saveKeyToGH(pass: string, token: string) {

    this.savePass(pass);
    this.saveKey(token);

    const octokit = new Octokit({auth: this.getKey(), log: console});

    this.getGHKey()
      .then(file => {
          console.log(file);
          console.log(file.data.sha);
          return octokit.repos.deleteFile({
            owner: 'ezomode',
            repo: 'notiki',
            path: gh_key_path,
            message: 'delete gh_key',
            sha: file.data.sha
          });
        }
      )
      .then(_ => {
        encryptP(pass, token)
          .pipe(flatMap(tokenEnc =>
            octokit.repos.createOrUpdateFile({
              owner: 'ezomode',
              repo: 'notiki',
              path: gh_key_path,
              message: 'update gh_key',
              content: btoa(tokenEnc),
              'committer.name': '',
              'committer.email': '',
            })
          ))
          .toPromise()
          .then(res => console.log(res));
      }
    );
  }

  getGHKey() {
    return new Octokit({auth: this.getKey(), log: console})
      .repos
      .getContents({owner: 'ezomode', repo: 'notiki', path: gh_key_path});
  }

  savePass(s: string) {
    return localStorage.setItem('password', s);
  }

  getPass() {
    return localStorage.getItem('password');
  }

  saveKey(s: string) {
    return localStorage.setItem('gh_key', s);
  }

  getKey() {
    return localStorage.getItem('gh_key');
  }
}

// from https://gist.github.com/chrisveness/43bcda93af9f646d083fad678071b90a

/**
 * Encrypts plaintext using AES-GCM with supplied password, for decryption with aesGcmDecrypt().
 *                                                                      (c) Chris Veness MIT Licence
 *
 * @param   {String} plaintext - Plaintext to be encrypted.
 * @param   {String} password - Password to use to encrypt plaintext.
 * @returns {String} Encrypted ciphertext.
 *
 * @example
 *   const ciphertext = await aesGcmEncrypt('my secret text', 'pw');
 *   aesGcmEncrypt('my secret text', 'pw').then(function(ciphertext) { console.log(ciphertext); });
 */
async function encrypt(password: string, plaintext: string): Promise<string> {
  const pwUtf8 = new TextEncoder().encode(password);                                 // encode password as UTF-8
  const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);                      // hash the password

  const iv = crypto.getRandomValues(new Uint8Array(12));                             // get 96-bit random iv
  console.log('encrypt iv raw: ' + iv);

  const alg = {name: 'AES-GCM', iv: iv};                                           // specify algorithm to use
  const key = await crypto.subtle.importKey('raw', pwHash, 'AES-GCM', false, ['encrypt']); // generate key from pw
  const ptUint8 = new TextEncoder().encode(plaintext);                               // encode plaintext as UTF-8
  const ctBuffer = await crypto.subtle.encrypt(alg, key, ptUint8);                   // encrypt plaintext using key

  const ctArray = Array.from(new Uint8Array(ctBuffer));                              // ciphertext as byte array
  const ctStr = ctArray.map(byte => String.fromCharCode(byte)).join('');             // ciphertext as string
  const ctBase64 = btoa(ctStr);                                                      // encode ciphertext as base64

  const ivHex = Array.from(iv).map(b => ('00' + b.toString(16)).slice(-2)).join(''); // iv as hex string
  console.log('encrypt ivHex: ' + ivHex);

  let s = ivHex + ctBase64;

  console.log(s);

  return s;                                                             // return iv+ciphertext
}


/**
 * Decrypts ciphertext encrypted with aesGcmEncrypt() using supplied password.
 *                                                                      (c) Chris Veness MIT Licence
 *
 * @param   {String} ciphertext - Ciphertext to be decrypted.
 * @param   {String} password - Password to use to decrypt ciphertext.
 * @returns {String} Decrypted plaintext.
 *
 * @example
 *   const plaintext = await aesGcmDecrypt(ciphertext, 'pw');
 *   aesGcmDecrypt(ciphertext, 'pw').then(function(plaintext) { console.log(plaintext); });
 */
async function decrypt(password: string, ciphertext: string): Promise<string> {
  const pwUtf8 = new TextEncoder().encode(password);                                  // encode password as UTF-8
  const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);                       // hash the password

  const iv = ciphertext.slice(0, 24).match(/.{2}/g).map(byte => parseInt(byte, 16));   // get iv from ciphertext
  console.log('decrypt iv: ' + iv);

  const key = await crypto.subtle.importKey('raw', pwHash, 'AES-GCM', false, ['decrypt']);  // use pw to generate key

  let ciphered = ciphertext.slice(24);
  console.log('decrypt ciphered: ' + ciphered);
  const ctStr = atob(ciphered);                                           // decode base64 ciphertext
  const ctUint8 = new Uint8Array(ctStr.match(/[\s\S]/g).map(ch => ch.charCodeAt(0))); // ciphertext as Uint8Array
  // note: why doesn't ctUint8 = new TextEncoder().encode(ctStr) work?

  const alg = {name: 'AES-GCM', iv: new Uint8Array(iv)};                            // specify algorithm to use
  const plainBuffer = await crypto.subtle.decrypt(alg, key, ctUint8);                 // decrypt ciphertext using key
                                                                                      // decode password from UTF-8
  let s = new TextDecoder().decode(plainBuffer);

  console.log(s);

  return s;                                                                   // return the plaintext
}
