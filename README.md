CMS-3.0
=======

CMS 3.0 Content Management ในโครงการซอฟแวร์สาธารณะ ที่จัดทำขึ้นเพื่อให้ทุกคนใช้งานง่ายๆจุดประสงค์หลักเพื่อให้ คนไทยมีซอฟแวร์ดีๆใช้งาน ในการออกแบบเพื่อให้ทุกคนเข้าถึงได้ง่าย และพัฒนาต่อยอดออกไป การพัฒนาอาศัย ExpressJS เป็น Framework หลัก โดยในฝั่ง Database จะใช้ MongoDB เป็น Database หลัก
โครงสร้างแรกนี้อาจเปลี่ยนแปลงได้ตามข้อเสนอของท่านอื่น ปล. มันเป็นโครงการที่ร่วมกันสร้าง ใครมีแนวคิดอะไรนำเสนอได้ครับ

## Server side component
    ExpressJS
    Mongoose
    EJS,express-ejs-layouts

## Client side
    angularjs,requirejs,angularAMD
    twitter-bootstrap
    underscore
    tinyMCE

## Requirement
    nodjs http://nodejs.org/
    bower http://bower.io/

## Installation
    npm install && bower install
    Default http access port is 3000. You can change /bin/www line number 5 to any port.

## Usage
    npm start
    Start your any browser access to  http://localhost:3000 for frontend.
    http://localhost:3000/login for backend.

