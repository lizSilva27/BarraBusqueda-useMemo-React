import { useState } from 'react';
import SearchBar from './Components/SearchBar';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding-top: 15px;
  margin-bottom: 100px;
  // border: 1px solid blue;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: White;
  border: solid 2px #ccc;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Blinker', sans-serif;

  &:hover{ 
    background-color: #efefef;
  }
`;

const StyledSelectResult = styled.p`
  font-family: 'Blinker', sans-serif;
  font-size: 16px;
  background-color: Black;
  color: White;
  padding: 5px;
  margin-top: 12px;
  font-style: italic;
  width: 490px;
`;

const people = [
  {
    id: 'people-01',
    title: 'Lizeth Silva',
  },
  {
    id: 'people-02',
    title: 'Marcos Rivas',
  },
  {
    id: 'people-03',
    title: 'Sergio Martínez',
  },
  {
    id: 'people-04',
    title: 'Camila Torres',
  },
  {
    id: 'people-05',
    title: 'Horacio Gonzalez',
  },
  {
    id: 'people-06',
    title: 'Conrad Hawkings',
  },
  {
    id: 'people-07',
    title: 'Nicky Nay',
  },
  {
    id: 'people-08',
    title: 'Michael Maczaurgs',
  },
  {
    id: 'people-09',
    title: 'Randolph Bell',
  },
  {
    id: 'people-10',
    title: 'Nicolette Nevin',
  },
  {
    id: 'people-11',
    title: 'Mina Okafor',
  },
  {
    id: 'people-12',
    title: 'Devon Pravesh',
  },
  {
    id: 'people-13',
    title: 'Lane Hunter',
  },
  {
    id: 'people-14',
    title: 'Leela Devi',
  },
  {
    id: 'people-15',
    title: 'Ian Sullivan',
  },
  {
    id: 'people-16',
    title: 'Lili Kenda',
  },
  {
    id: 'people-17',
    title: 'Jude Silva',
  },
  {
    id: 'people-18',
    title: 'Kyle Nevin',
  },
  {
    id: 'people-19',
    title: 'Shaun Murphy',
  },
  {
    id: 'people-20',
    title: 'Neil Melendez',
  },
  {
    id: 'people-21',
    title: 'Claire Browne',
  },
  {
    id: 'people-22',
    title: 'Marcus Andrews',
  },
  {
    id: 'people-23',
    title: 'Aaron Glassman',
  },
  {
    id: 'people-24',
    title: 'Morgan Reznick',
  },
  {
    id: 'people-25',
    title: 'Alex Park',
  },
  {
    id: 'people-26',
    title: 'Andrea Herrera',
  },
  {
    id: 'people-27',
    title: 'Benjamin Warren',
  },
  {
    id: 'people-28',
    title: 'Jack Gibson',
  },
  {
    id: 'people-29',
    title: 'Victoria Hughes',
  },
  {
    id: 'people-30',
    title: 'Travis Montgomery',
  },
  {
    id: 'people-31',
    title: 'Dean Miller',
  },
  {
    id: 'people-32',
    title: 'Maya De Luca-Bishop',
  },
  {
    id: 'people-33',
    title: 'Pruitt Herrera',
  },
  {
    id: 'people-34',
    title: 'Carina De Luca-Bishop',
  },
  {
    id: 'people-35',
    title: 'Theo Ruiz',
  },
  {
    id: 'people-36',
    title: 'Michael Dixon',
  },
  {
    id: 'people-37',
    title: 'Rick Grimes',
  },
  {
    id: 'people-38',
    title: 'Shane Walsh',
  },
  {
    id: 'people-39',
    title: 'Lori Grimes',
  },
  {
    id: 'people-40',
    title: 'Gleen Rhee',
  },
  {
    id: 'people-41',
    title: 'Carl Greene',
  },
  {
    id: 'people-42',
    title: 'Daryl Dixon',
  },
  {
    id: 'people-43',
    title: 'Maggie Greene',
  },
  {
    id: 'people-44',
    title: 'Michonne',
  },
  {
    id: 'people-45',
    title: 'Carol Peletier',
  },
  {
    id: 'people-46',
    title: 'Hersheñ Greene',
  },
  {
    id: 'people-47',
    title: 'Abraham Ford',
  },
  {
    id: 'people-48',
    title: 'Tara Chambler',
  },
  {
    id: 'people-49',
    title: 'Eigene Porter',
  },
  {
    id: 'people-50',
    title: 'Rosita Espinosa',
  },
];

const calendar = [
  {
    id: 'calendar-01',
    title: 'Sesión de seguimiento',
  },
  {
    id: 'calendar-02',
    title: 'Revisión de propuestas',
  },
  {
    id: 'calendar-03',
    title: 'Evento para donar juguetes',
  },
  {
    id: 'calendar-04',
    title: 'Cena con amigos',
  },
  {
    id: 'calendar-05',
    title: 'Junta semanal de equipo',
  },
  {
    id: 'calendar-06',
    title: 'Revisión de requerimientos con clientes',
  },
  {
    id: 'calendar-07',
    title: 'Raalizar seguimiento a proyectos con el Sr. Steven',
  },
  {
    id: 'calendar-08',
    title: 'Junta con la Dra. Estela Juárez',
  },
  {
    id: 'calendar-09',
    title: 'Cumpleaños de Abuela',
  },
  {
    id: 'calendar-10',
    title: 'Realizar compras en el supermercado',
  },
];

const emails = [
  {
    id: 'email-01',
    title: 'Reporte de resultados',
  },
  {
    id: 'email-02',
    title: 'Requisitos para obtener residencia en México',
  },
  {
    id: 'email-03',
    title: 'Próximos eventos',
  },
  {
    id: 'email-04',
    title: 'Estatus de funcionalidad',
  },
  {
    id: 'email-05',
    title: 'Requerimientos del proyecto "Desarrollo web"',
  },
  {
    id: 'email-06',
    title: 'Resultados de ánalisis de laboratorio',
  },
  {
    id: 'email-07',
    title: 'Participa en la encuesta para ganar $1,000,000',
  },
  {
    id: 'email-08',
    title: 'Actividades en el mes de Septiembre/Octubre',
  },
  {
    id: 'email-09',
    title: 'Aseguradora de tu auto',
  },
  {
    id: 'email-10',
    title: 'Actualiza datos fiscales',
  },
  {
    id: 'email-11',
    title: 'Declaración en SAT',
  },
];

const countries = [
  {
   "id": "country-01",
   "title": "🇦🇫 Afganistán - Kabul "
  },
  {
   "id": "country-02",
   "title": "🇦🇱 Albania - Tirana"
  },
  {
   "id": "country-03",
   "title": "🇩🇪 Alemania - Berlín"
  },
  {
   "id": "country-04",
   "title": "🇦🇩 Andorra - Andorra la Vieja"
  },
  {
   "id": "country-05",
   "title": "🇦🇴 Angola - Luanda"
  },
  {
   "id": "country-06",
   "title": "🇦🇬 Antigua y Barbuda - Saint John"
  },
  {
   "id": "country-07",
   "title": "🇸🇦 Arabia Saudita - Riad"
  },
  {
   "id": "country-08",
   "title": "🇩🇿 Argelia - Argel"
  },
  {
   "id": "country-09",
   "title": "🇦🇷 Argentina - Buenos Aires"
  },
  {
   "id": "country-010",
   "title": "🇦🇲 Armenia - Ereván"
  },
  {
   "id": "country-011",
   "title": "🇦🇺 Australia - Canberra"
  },
  {
   "id": "country-012",
   "title": "🇦🇹 Austria - Viena"
  },
  {
   "id": "country-013",
   "title": "🇦🇿 Azerbaiyán - Bakú"
  },
  {
   "id": "country-014",
   "title": "🇧🇸 Bahamas  - Nassau"
  },
  {
   "id": "country-015",
   "title": "🇧🇭 Bahrein - Manama"
  },
  {
   "id": "country-016",
   "title": "🇧🇩 Bangladesh - Daca"
  },
  {
   "id": "country-017",
   "title": "🇧🇧 Barbados - Bridgetown"
  },
  {
   "id": "country-018",
   "title": "🇧🇾 Bielorrusia - Minsk"
  },
  {
   "id": "country-019",
   "title": "🇧🇪 Bélgica - Bruselas"
  },
  {
   "id": "country-020",
   "title": "🇧🇿 Belice - Belmopán"
  },
  {
   "id": "country-021",
   "title": "🇧🇯 Benin - Porto Novo"
  },
  {
   "id": "country-022",
   "title": "🇧🇹 Bután - Timbu"
  },
  {
   "id": "country-023",
   "title": "🇧🇴 Bolivia  - Sucre"
  },
  {
   "id": "country-024",
   "title": "🇧🇦 Bosnia y Herzegovina - Sarajevo"
  },
  {
   "id": "country-025",
   "title": "🇧🇼 Botswana - Gaborone"
  },
  {
   "id": "country-026",
   "title": "🇧🇷 Brasil - Brasilia"
  },
  {
   "id": "country-027",
   "title": "Brunei Darussalam - Bandar Seri Begawan"
  },
  {
   "id": "country-028",
   "title": "🇧🇬 Bulgaria - Sofía"
  },
  {
   "id": "country-029",
   "title": "🇧🇫 Burkina Faso - Uagadugú"
  },
  {
   "id": "country-030",
   "title": "🇧🇮 Burundi - Buyumbura"
  },
  {
   "id": "country-031",
   "title": "🇨🇻 Cabo Verde - Praia"
  },
  {
   "id": "country-032",
   "title": "🇰🇭 Camboya - Phnom Penh"
  },
  {
   "id": "country-033",
   "title": "🇨🇲 Camerún - Yaundé"
  },
  {
   "id": "country-034",
   "title": "🇨🇦 Canadá - Ottawa"
  },
  {
   "id": "country-035",
   "title": "🇹🇩 Chad - Yamena"
  },
  {
   "id": "country-036",
   "title": "🇨🇿 Chequia -  Praga"
  },
  {
   "id": "country-037",
   "title": "🇨🇱 Chile - Santiago de Chile"
  },
  {
   "id": "country-038",
   "title": "🇨🇳 China - Beijing"
  },
  {
   "id": "country-039",
   "title": "🇨🇾 Chipre - Nicosia"
  },
  {
   "id": "country-040",
   "title": "🇨🇴 Colombia - Bogotá"
  },
  {
   "id": "country-041",
   "title": "🇰🇲 Comoras  - Moroni"
  },
  {
   "id": "country-042",
   "title": "🇨🇬 Republica del Congo - Brazzaville"
  },
  {
   "id": "country-043",
   "title": "🇨🇷 Costa Rica - San José"
  },
  {
   "id": "country-044",
   "title": "Costa de Marfil - Yamusukro"
  },
  {
   "id": "country-045",
   "title": "🇭🇷 Croacia - Zagreb"
  },
  {
   "id": "country-046",
   "title": "🇨🇺 Cuba - La Habana"
  },
  {
   "id": "country-047",
   "title": "🇩🇰 Dinamarca - Copenhague"
  },
  {
   "id": "country-048",
   "title": "🇩🇯 Yibuti - Yibuti"
  },
  {
   "id": "country-049",
   "title": "🇩🇲 "
  },
  {
   "id": "country-050",
   "title": "🇪🇨 Ecuador  - Quito"
  },
  {
   "id": "country-051",
   "title": "🇪🇬 Egipto - El Cairo"
  },
  {
   "id": "country-052",
   "title": "🇸🇻 El Salvador - San Salvador"
  },
  {
   "id": "country-053",
   "title": "🇦🇪 Emiratos Árabes Unidos - Abu Dabi"
  },
  {
   "id": "country-054",
   "title": "🇪🇷 Eritrea - Asmara"
  },
  {
   "id": "country-055",
   "title": "🇸🇰 Eslovaquia - Bratislava"
  },
  {
   "id": "country-056",
   "title": "🇸🇮 Eslovenia - Liubliana"
  },
  {
   "id": "country-057",
   "title": "🇪🇸 España - Madrid"
  },
  {
   "id": "country-058",
   "title": "🇺🇸 Estados Unidos de América - Washington D.C."
  },
  {
   "id": "country-059",
   "title": "🇪🇪 Estonia - Tallin"
  },
  {
   "id": "country-060",
   "title": "🇸🇿 Suazilandia - Mbabane"
  },
  {
   "id": "country-061",
   "title": "🇪🇹 Etiopía - Addis Abeba"
  },
  {
   "id": "country-062",
   "title": "🇧🇾 Federación de Rusia  - Moscú"
  },
  {
   "id": "country-063",
   "title": "🇫🇯 Fiji - Suva"
  },
  {
   "id": "country-064",
   "title": "🇵🇭 Filipinas - Manila"
  },
  {
   "id": "country-065",
   "title": "🇫🇮 Finlandia - Helsinki"
  },
  {
   "id": "country-066",
   "title": "🇫🇷 Francia - París"
  },
  {
   "id": "country-067",
   "title": "🇬🇦 Gabón  - Libreville"
  },
  {
   "id": "country-068",
   "title": "🇬🇲 Gambia - Banjul"
  },
  {
   "id": "country-069",
   "title": "🇬🇸 Georgia - Tbilisi; Tiflis"
  },
  {
   "id": "country-070",
   "title": "🇬🇭 Ghana - Accra"
  },
  {
   "id": "country-071",
   "title": "🇻🇨 Granada - St. George’s"
  },
  {
   "id": "country-072",
   "title": "🇬🇷 Grecia - Atenas"
  },
  {
   "id": "country-073",
   "title": "🇬🇹 Guatemala - Ciudad de Guatemala"
  },
  {
   "id": "country-074",
   "title": "🇬🇳 Guinea - Conakry"
  },
  {
   "id": "country-075",
   "title": "🇬🇶 Guinea Ecuatorial - Malabo"
  },
  {
   "id": "country-076",
   "title": "🇬🇼 Guinea-Bissau - Bissau"
  },
  {
   "id": "country-077",
   "title": "🇬🇾 Guyana - Georgetown"
  },
  {
   "id": "country-078",
   "title": "🇭🇹 Haití - Puerto Príncipe"
  },
  {
   "id": "country-079",
   "title": "🇭🇳 Honduras - Tegucigalpa"
  },
  {
   "id": "country-080",
   "title": "🇭🇺 Hungría - Budapest"
  },
  {
   "id": "country-081",
   "title": "🇮🇳 India  - Nueva Delhi"
  },
  {
   "id": "country-082",
   "title": "🇮🇩 Indonesia - Yakarta"
  },
  {
   "id": "country-083",
   "title": "🇮🇷 Irán - Teherán"
  },
  {
   "id": "country-084",
   "title": "🇮🇶 Iraq  - Bagdad"
  },
  {
   "id": "country-085",
   "title": "🇮🇪 Irlanda - Dublín"
  },
  {
   "id": "country-086",
   "title": "🇮🇸 Islandia - Reykjavik"
  },
  {
   "id": "country-087",
   "title": "🇨🇰 Islas Cook  - Avarua"
  },
  {
   "id": "country-088",
   "title": "🇲🇭 Islas Marshall  - Majuro"
  },
  {
   "id": "country-089",
   "title": "🇸🇧 Islas Salomón  - Honiara"
  },
  {
   "id": "country-090",
   "title": "🇮🇱 Israel - "
  },
  {
   "id": "country-091",
   "title": "🇮🇹 Italia - Roma"
  },
  {
   "id": "country-092",
   "title": "🇯🇲 Jamaica - Kingston"
  },
  {
   "id": "country-093",
   "title": "🇯🇵 Japón - Tokio"
  },
  {
   "id": "country-094",
   "title": "🇯🇴 Jordania - Ammán"
  },
  {
   "id": "country-095",
   "title": "🇰🇿 Kazajstán - Nursultán"
  },
  {
   "id": "country-096",
   "title": "🇰🇪 Kenia - Nairobi"
  },
  {
   "id": "country-097",
   "title": "🇰🇬 Kirguistán - Biskek"
  },
  {
   "id": "country-098",
   "title": "🇰🇮 Kiribati - Tarawa"
  },
  {
   "id": "country-099",
   "title": "🇰🇼 Kuwait - Kuwait"
  },
  {
   "id": "country-0100",
   "title": "🇱🇸 Lesoto - Maseru"
  },
  {
   "id": "country-0101",
   "title": "🇱🇻 Letonia - Riga"
  },
  {
   "id": "country-0102",
   "title": "🇱🇧 Líbano  - Beirut"
  },
  {
   "id": "country-0103",
   "title": "🇱🇷 Liberia - Monrovia"
  },
  {
   "id": "country-0104",
   "title": "🇱🇾 Libia - Trípoli"
  },
  {
   "id": "country-0105",
   "title": "🇱🇮 Liechtenstein - Vaduz"
  },
  {
   "id": "country-0106",
   "title": "🇱🇹 Lituania - Vilna"
  },
  {
   "id": "country-0107",
   "title": "🇱🇺 Luxemburgo - Luxemburgo"
  },
  {
   "id": "country-0108",
   "title": "🇲🇬 malaMadagascar - Antananarivo"
  },
  {
   "id": "country-0109",
   "title": "🇲🇾 Malasia - Kuala Lumpur"
  },
  {
   "id": "country-0110",
   "title": "🇲🇼 Malaui - Lilongwe"
  },
  {
   "id": "country-0111",
   "title": "🇲🇻 Maldivas - Malé"
  },
  {
   "id": "country-0112",
   "title": "🇲🇱 Malí - Bamako"
  },
  {
   "id": "country-0113",
   "title": "🇲🇹 Malta - La Valetta"
  },
  {
   "id": "country-0114",
   "title": "🇲🇦 Marruecos - Rabat"
  },
  {
   "id": "country-0115",
   "title": "🇲🇺 Mauricio - Port Louis"
  },
  {
   "id": "country-0116",
   "title": "🇲🇷 Mauritania - Nuakchot"
  },
  {
   "id": "country-0117",
   "title": "🇲🇽 México - Ciudad de México"
  },
  {
   "id": "country-0118",
   "title": "🇫🇲 Micronesia - Palikir"
  },
  {
   "id": "country-0119",
   "title": "🇲🇨 Mónaco - Mónaco"
  },
  {
   "id": "country-0120",
   "title": "🇲🇳 Mongolia - Ulaanbaatar"
  },
  {
   "id": "country-0121",
   "title": "🇲🇪 Montenegro - Podgorica"
  },
  {
   "id": "country-0122",
   "title": "🇲🇿 Mozambique - Maputo"
  },
  {
   "id": "country-0123",
   "title": "🇲🇲 Birmania -	Naipyidó"
  },
  {
   "id": "country-0124",
   "title": "🇳🇦 Namibia - Windhoek"
  },
  {
   "id": "country-0125",
   "title": "🇳🇷 Nauru - Yaren"
  },
  {
   "id": "country-0126",
   "title": "🇳🇵 Nepal - Katmandú"
  },
  {
   "id": "country-0127",
   "title": "🇳🇮 Nicaragua - Managua"
  },
  {
   "id": "country-0128",
   "title": "🇳🇪 Níger - Niamey"
  },
  {
   "id": "country-0129",
   "title": "🇳🇬 Nigeria - Abuya"
  },
  {
   "id": "country-0130",
   "title": "🇳🇺 Niue - Alofi"
  },
  {
   "id": "country-0131",
   "title": "🇳🇴 Noruega - Oslo"
  },
  {
   "id": "country-0132",
   "title": "🇳🇿 Nueva Zelanda - Wellington"
  },
  {
   "id": "country-0133",
   "title": "🇴🇲 Omán - Mascate"
  },
  {
   "id": "country-0134",
   "title": "🇳🇱 Países Bajos  - Ámsterdam"
  },
  {
   "id": "country-0135",
   "title": "🇳🇱 Pakistán  - Islamabad"
  },
  {
   "id": "country-0136",
   "title": "🇵🇼 Palaos - Melekeok"
  },
  {
   "id": "country-0137",
   "title": "🇵🇦 Panamá - Panamá"
  },
  {
   "id": "country-0138",
   "title": "🇵🇬 Papua Nueva Guinea - Port Moresby"
  },
  {
   "id": "country-0139",
   "title": "🇵🇾 Paraguay - Asunción"
  },
  {
   "id": "country-0140",
   "title": "🇵🇪 Perú  - Lima"
  },
  {
   "id": "country-0141",
   "title": "🇵🇱 Polonia - Varsovia"
  },
  {
   "id": "country-0142",
   "title": "🇵🇹 Portugal - Lisboa"
  },
  {
   "id": "country-0143",
   "title": "🇶🇦 Qatar - Doha"
  },
  {
   "id": "country-0144",
   "title": "🇬🇧 Reino Unido de Gran Bretaña e Irlanda del Norte - Londres"
  },
  {
   "id": "country-0145",
   "title": "🇸🇾 República Árabe Siria  - Damasco"
  },
  {
   "id": "country-0146",
   "title": "🇨🇫 República Centroafricana - Bangui"
  },
  {
   "id": "country-0147",
   "title": "🇰🇷 República de Corea - Seúl"
  }
 ];

function App() {

  const [data, setData] = useState([...people, ...emails, ...calendar, ...countries]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState('all');

  function handleClick(event) {

     const option = event.target.name;

     switch(option) {

      case 'all':
        setData([...people, ...emails, ...calendar, ...countries]);
        setCurrentOption('all');
        break;

      case 'people':
        setData([...people]);
        setCurrentOption('people');
        break;

      case 'emails':
        setData([...emails]);
        setCurrentOption('emails');
        break;

      case 'calendar':
        setData([...calendar]);
        setCurrentOption('calendar');
        break;

      case 'countries':
        setData([...countries]);
        setCurrentOption('countries');
        break;
     }
  }

  function handleItemSelected(item) {
    setSelection(item);
  }


  return (
    <StyledContainer>
      <Button onClick={handleClick} name='all'> All  </Button>
      <Button onClick={handleClick} name='people' > People 👥 </Button>
      <Button onClick={handleClick} name='calendar' > Calendar 🗓️ </Button>
      <Button onClick={handleClick} name='emails' > Emails 📧 </Button>
      <Button onClick={handleClick} name='countries' > Countries 🌐 </Button>

       {selection ? <StyledSelectResult>You selected: {selection.title}</StyledSelectResult> : ''}
      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </StyledContainer>
  );
}

export default App