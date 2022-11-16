//Cara Berpartisipasi
1. git clone
2. npm install
3. ganti config dengan user dan password postgre klean
4. buat db -> sequelize db:create
5. Migrate jangan lupa -> sequelize db:migrate
6. klean cukup buat crud yang belom tersedia 
7. Bersyukur kepada tuhan YME


// Mini Challenge ORM
// Ada Entitas Table 	
// Didalam table Role memiliki attribute name, permission, createdAt, updatedAt
// Buat CRUD untuk manage data Role user
// Durasi 50 menit
// Present per tim
// Tim dibagi menjadi 3 kelompok

//Jawaban atau Solusi
1.sequelize model:generate --name Role_User --attributes name:string,permission:string
2.sequelize db:migrate
3.db.role_user = require("./role_user.js")(sequelize, Sequelize); // model/index.js  load model 
4.const Role = model.role_user // inisialisasi model
5.buat crud ganti prefix dan modelnya  // prefix (/api/role) Model Role