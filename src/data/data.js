export let data = [{
  "id": 1,
  "first_name": "Raeann",
  "last_name": "Mudd",
  "email": "rmudd0@nyu.edu",
  "gender": "Female",
  "ip_address": "139.184.140.117"
}, {
  "id": 2,
  "first_name": "Meir",
  "last_name": "Greenstock",
  "email": "mgreenstock1@ow.ly",
  "gender": "Male",
  "ip_address": "57.130.162.254"
}, {
  "id": 3,
  "first_name": "Anna-maria",
  "last_name": "Kilfeather",
  "email": "akilfeather2@newsvine.com",
  "gender": "Female",
  "ip_address": "15.216.103.6"
}, {
  "id": 4,
  "first_name": "Morie",
  "last_name": "Cotmore",
  "email": "mcotmore3@army.mil",
  "gender": "Male",
  "ip_address": "151.72.157.56"
}, {
  "id": 5,
  "first_name": "Reinhard",
  "last_name": "Toderbrugge",
  "email": "rtoderbrugge4@bravesites.com",
  "gender": "Male",
  "ip_address": "209.196.247.78"
}, {
  "id": 6,
  "first_name": "Ulla",
  "last_name": "Minister",
  "email": "uminister5@desdev.cn",
  "gender": "Female",
  "ip_address": "106.223.35.133"
}, {
  "id": 7,
  "first_name": "Tobey",
  "last_name": "Polding",
  "email": "tpolding6@ftc.gov",
  "gender": "Female",
  "ip_address": "213.126.112.220"
}, {
  "id": 8,
  "first_name": "Harman",
  "last_name": "Hackforth",
  "email": "hhackforth7@ibm.com",
  "gender": "Male",
  "ip_address": "105.142.85.165"
}, {
  "id": 9,
  "first_name": "Neila",
  "last_name": "Chennells",
  "email": "nchennells8@tiny.cc",
  "gender": "Female",
  "ip_address": "139.191.125.123"
}, {
  "id": 10,
  "first_name": "Blinni",
  "last_name": "McKim",
  "email": "bmckim9@surveymonkey.com",
  "gender": "Female",
  "ip_address": "28.250.130.5"
}];

const arrayOfFirstNames:string[] = data.map(d=>d.first_name);

const lastNameMcKim = data.find(d=>d.first_name=="McKim");

const sumOfDigits = (value:integer)=>value.toString().split("").reduce((sum, value)=>sum+(+value), 0);
