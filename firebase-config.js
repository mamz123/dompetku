// Dompetku — pengaturan Firebase
// 1) Ganti nilai "GANTI" dengan firebaseConfig dari Firebase Console
//    (Project settings → General → Your apps → SDK setup and configuration → Config).
//    Isi ini BUKAN rahasia: aman diunggah ke GitHub. Keamanan data diatur oleh firestore.rules.
// 2) householdId: nama data bersama. Semua email yang diizinkan di firestore.rules
//    akan melihat data yang sama. Kosongkan ("") kalau ingin data pribadi per akun.

window.DOMPETKU_FIREBASE = {
  apiKey: "AIzaSyC22mcALaOt1mfKC8-44EhFw58GhAu1i9c",
  authDomain: "dompetku-c24d8.firebaseapp.com",
  projectId: "dompetku-c24d8",
  storageBucket: "dompetku-c24d8.firebasestorage.app",
  messagingSenderId: "813613943080",
  appId: "1:813613943080:web:e1b09246d76b82fb13e81d",

  householdId: "keluarga"   // huruf, angka, - atau _ saja. Harus sama dengan di firestore.rules
};
