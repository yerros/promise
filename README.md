# Asynchronous dan Synchronous

## Synchronous
**Synchronous** adalah proses pengeksekusian kode yang dijalankan secara berurutan berdasarkan kode yang tertulis.

**Contohnya**
```javascript
console.log(1);

console.log(2);

console.log(3);
```

Hasil:
```javascript
1

2

3
```

dalam kasus diatas dapat kita simpulkan bahwa *output yang di dapatkan sesuai urutan kode yang kita tulis*.
<br>
<br>
<br>
## Asynchronous
Berbeda dengan **Synchronous**, proses **Asyncrhonous** adalah proses pengeksekusian kode yang tidak sesuai dengan urutan yang ada atau bisa disebut menjalankan perintah selanjutnya tanpa menunggu perintah sebelumnya selesai.

Contoh:
```javascript
console.log(1);

setTimeout(function () {
    console.log(2);
}, 3000);

console.log(3);
```

Hasil:
```javascript
1

3

2
```

Perintah diatas dijalankan bersamaan namun hasil untuk console.log(2) dicetak pada akhir, karena proses setTimeout belum selesai, tanpa menunggu proses setTimeout tersebut maka perintah selanjutnya dijalankan.