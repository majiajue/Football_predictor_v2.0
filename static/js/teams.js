        var select = document.getElementById("teams_list");
        var select2 = document.getElementById("teams_list2");
        
        
        
        
        <!-- THIS IS WRONG IT HAS TO PICK UP THE NAMES FROM THE LIST: -->
        
        var options = ['Liverpool English Premier League (1)',
       'Manchester City English Premier League (1)',
       'Real Madrid CF Spain Primera Division (1)',
       'FC Bayern München German 1. Bundesliga (1)',
       'FC Barcelona Spain Primera Division (1)',
       'Juventus Italian Serie A (1)',
       'Paris Saint-Germain French Ligue 1 (1)',
       'Atlético Madrid Spain Primera Division (1)',
       'Chelsea English Premier League (1)',
       'Manchester United English Premier League (1)',
       'Tottenham Hotspur English Premier League (1)',
       'Borussia Dortmund German 1. Bundesliga (1)',
       'Inter Italian Serie A (1)', 'Arsenal English Premier League (1)',
       'Napoli Italian Serie A (1)',
       'RB Leipzig German 1. Bundesliga (1)', 'Lazio Italian Serie A (1)',
       'Sevilla FC Spain Primera Division (1)',
       'Villarreal CF Spain Primera Division (1)',
       'Everton English Premier League (1)',
       'Borussia Mönchengladbach German 1. Bundesliga (1)',
       'Bayer 04 Leverkusen German 1. Bundesliga (1)',
       'Atalanta Italian Serie A (1)',
       'Leicester City English Premier League (1)',
       'Athletic Club de Bilbao Spain Primera Division (1)',
       'Real Sociedad Spain Primera Division (1)',
       'SL Benfica Portuguese Liga ZON SAGRES (1)',
       'West Ham United English Premier League (1)',
       'AC Milan Italian Serie A (1)', 'A.S. Roma Italian Serie A (1)',
       'Wolverhampton Wanderers English Premier League (1)',
       'Real Betis Balompié Spain Primera Division (1)',
       'Valencia CF Spain Primera Division (1)',
       'Olympique de Marseille French Ligue 1 (1)',
       'FC Porto Portuguese Liga ZON SAGRES (1)',
       'Ajax Holland Eredivisie (1)',
       'Crystal Palace English Premier League (1)',
       'Newcastle United English Premier League (1)',
       'Eintracht Frankfurt German 1. Bundesliga (1)',
       'TSG 1899 Hoffenheim German 1. Bundesliga (1)',
       'LOSC Lille French Ligue 1 (1)',
       'Olympique Lyonnais French Ligue 1 (1)',
       'Getafe CF Spain Primera Division (1)',
       'AS Monaco French Ligue 1 (1)',
       'VfL Wolfsburg German 1. Bundesliga (1)',
       'Sporting CP Portuguese Liga ZON SAGRES (1)',
       'Aston Villa English Premier League (1)',
       'Burnley English Premier League (1)',
       'Brighton & Hove Albion English Premier League (1)',
       'Southampton English Premier League (1)',
       'Flamengo Campeonato Brasileiro Série A (1)',
       'FC Schalke 04 German 1. Bundesliga (1)',
       'Fiorentina Italian Serie A (1)', 'Torino Italian Serie A (1)',
       'Levante UD Spain Primera Division (1)',
       'Galatasaray SK Turkish Süper Lig (1)',
       'Stade Rennais FC French Ligue 1 (1)',
       'River Plate Argentina Primera División (1)',
       'Boca Juniors Argentina Primera División (1)',
       'SC Braga Portuguese Liga ZON SAGRES (1)',
       'Medipol Başakşehir FK Turkish Süper Lig (1)',
       'Hertha BSC German 1. Bundesliga (1)',
       'RC Celta Spain Primera Division (1)',
       'Real Valladolid CF Spain Primera Division (1)',
       'Deportivo Alavés Spain Primera Division (1)',
       'SD Eibar Spain Primera Division (1)',
       'CA Osasuna Spain Primera Division (1)',
       'Granada CF Spain Primera Division (1)',
       'PSV Holland Eredivisie (1)',
       'Sheffield United English Premier League (1)',
       'Watford English League Championship (2)',
       'Olympiacos CFP Greek Super League (1)',
       'Cagliari Italian Serie A (1)',
       'Fenerbahçe SK Turkish Süper Lig (1)',
       'Beşiktaş JK Turkish Süper Lig (1)', 'OGC Nice French Ligue 1 (1)',
       'Sassuolo Italian Serie A (1)',
       'Palmeiras Campeonato Brasileiro Série A (1)',
       'Fulham English Premier League (1)',
       'Tigres U.A.N.L. Mexican Liga MX (1)',
       'Shakhtar Donetsk Ukrainian Premier League (1)',
       'RCD Espanyol Spanish Segunda División (2)',
       'Racing Club Argentina Primera División (1)',
       'Club Brugge KV Belgian Jupiler Pro League (1)',
       'Feyenoord Holland Eredivisie (1)',
       'Leeds United English Premier League (1)',
       'Monterrey Mexican Liga MX (1)',
       'SK Slavia Praha Czech Republic Gambrinus Liga (1)',
       'Atlético Mineiro Campeonato Brasileiro Série A (1)',
       'Internacional Campeonato Brasileiro Série A (1)',
       'SC Freiburg German 1. Bundesliga (1)',
       '1. FC Köln German 1. Bundesliga (1)',
       'SV Werder Bremen German 1. Bundesliga (1)',
       'Sampdoria Italian Serie A (1)', 'Parma Italian Serie A (1)',
       'Udinese Italian Serie A (1)',
       'FC Augsburg German 1. Bundesliga (1)',
       'FC Girondins de Bordeaux French Ligue 1 (1)',
       'PFC CSKA Moscow Russian Premier League (1)',
       'Montpellier HSC French Ligue 1 (1)',
       'FC Nantes French Ligue 1 (1)',
       'RC Strasbourg Alsace French Ligue 1 (1)',
       'Celtic Scottish Premiership (1)',
       'São Paulo Campeonato Brasileiro Série A (1)',
       'Grêmio Campeonato Brasileiro Série A (1)',
       'Bournemouth English League Championship (2)',
       'Lokomotiv Moscow Russian Premier League (1)',
       'Spartak Moscow Russian Premier League (1)',
       '1. FSV Mainz 05 German 1. Bundesliga (1)',
       'Dynamo Kyiv Ukrainian Premier League (1)',
       'Bologna Italian Serie A (1)', 'Genoa Italian Serie A (1)',
       'Angers SCO French Ligue 1 (1)',
       'Norwich City English League Championship (2)',
       'CD Leganés Spanish Segunda División (2)',
       'AS Saint-Étienne French Ligue 1 (1)',
       'Santos Campeonato Brasileiro Série A (1)',
       '1. FC Union Berlin German 1. Bundesliga (1)',
       'Cruz Azul Mexican Liga MX (1)',
       'Club América Mexican Liga MX (1)',
       'West Bromwich Albion English Premier League (1)',
       'AZ Alkmaar Holland Eredivisie (1)',
       'Stade de Reims French Ligue 1 (1)',
       'Viktoria Plzeň Czech Republic Gambrinus Liga (1)',
       'PAOK Greek Super League (1)',
       'KRC Genk Belgian Jupiler Pro League (1)',
       'KAA Gent Belgian Jupiler Pro League (1)',
       'FC Red Bull Salzburg Austrian Football Bundesliga (1)',
       'Hellas Verona Italian Serie A (1)',
       'Elche CF Spain Primera Division (1)',
       'San Lorenzo de Almagro Argentina Primera División (1)',
       'SD Huesca Spain Primera Division (1)',
       'Botafogo Campeonato Brasileiro Série A (1)',
       'Sparta Praha Czech Republic Gambrinus Liga (1)',
       'Nottingham Forest English League Championship (2)',
       'AEK Athens Greek Super League (1)',
       'Hamburger SV German 2. Bundesliga (2)',
       'VfB Stuttgart German 1. Bundesliga (1)',
       'FC København Danish Superliga (1)',
       'Fluminense Campeonato Brasileiro Série A (1)',
       'Racing Club de Lens French Ligue 1 (1)',
       'FC Metz French Ligue 1 (1)',
       'Rangers FC Scottish Premiership (1)',
       'Al Hilal Saudi Abdul L. Jameel League (1)',
       'Stade Brestois 29 French Ligue 1 (1)',
       'Universidad Católica Chilian Campeonato Nacional (1)',
       'FC Basel 1893 Swiss Super League (1)',
       'BSC Young Boys Swiss Super League (1)',
       'Brentford English League Championship (2)',
       'Benevento Italian Serie A (1)',
       'DSC Arminia Bielefeld German 1. Bundesliga (1)',
       'Cádiz CF Spain Primera Division (1)',
       'Sivasspor Turkish Süper Lig (1)',
       'Trabzonspor Turkish Süper Lig (1)',
       'Club León Mexican Liga MX (1)',
       'Coritiba Campeonato Brasileiro Série A (1)',
       'RCD Mallorca Spanish Segunda División (2)',
       'Dinamo Zagreb Croatian Prva HNL (1)',
       'Nacional de Montevideo Uruguayan Primera División (1)',
       'Nîmes Olympique French Ligue 1 (1)',
       'Vélez Sarsfield Argentina Primera División (1)',
       'RSC Anderlecht Belgian Jupiler Pro League (1)',
       'Royal Antwerp FC Belgian Jupiler Pro League (1)',
       'Standard de Liège Belgian Jupiler Pro League (1)',
       'Rio Ave FC Portuguese Liga ZON SAGRES (1)',
       'Olimpia Asunción Paraguayan Primera División (1)',
       'Preston North End English League Championship (2)',
       'Al Nassr Saudi Abdul L. Jameel League (1)',
       'Independiente Argentina Primera División (1)',
       'Stoke City English League Championship (2)',
       'Club Athletico Paranaense Campeonato Brasileiro Série A (1)',
       'Portland Timbers USA Major League Soccer (1)',
       'Seattle Sounders FC USA Major League Soccer (1)',
       'Fortuna Düsseldorf German 2. Bundesliga (2)',
       'Vasco da Gama Campeonato Brasileiro Série A (1)',
       'Club Atlético Lanús Argentina Primera División (1)',
       'Bahia Campeonato Brasileiro Série A (1)',
       'Santos Laguna Mexican Liga MX (1)', 'Pachuca Mexican Liga MX (1)',
       'UD Almería Spanish Segunda División (2)',
       'Club Atlético Colón Argentina Primera División (1)',
       'Birmingham City English League Championship (2)',
       'Derby County English League Championship (2)',
       'Panathinaikos FC Greek Super League (1)',
       'Defensa y Justicia Argentina Primera División (1)',
       'Vitória Guimarães Portuguese Liga ZON SAGRES (1)',
       'Boavista FC Portuguese Liga ZON SAGRES (1)',
       'Yeni Malatyaspor Turkish Süper Lig (1)',
       'FC Utrecht Holland Eredivisie (1)',
       'Colo-Colo Chilian Campeonato Nacional (1)',
       'SPAL Italian Serie A (1)',
       'Beijing Sinobo Guoan FC Chinese Super League (1)',
       'Kayserispor Turkish Süper Lig (1)',
       'Sporting de Charleroi Belgian Jupiler Pro League (1)',
       'Club Libertad Paraguayan Primera División (1)',
       'Cardiff City English League Championship (2)',
       'Argentinos Juniors Argentina Primera División (1)',
       'Çaykur Rizespor Turkish Süper Lig (1)',
       'Columbus Crew SC USA Major League Soccer (1)',
       'Goiás Campeonato Brasileiro Série A (1)',
       'Estudiantes de La Plata Argentina Primera División (1)',
       'Guangzhou Evergrande Taobao FC Chinese Super League (1)',
       'Hannover 96 German 2. Bundesliga (2)',
       'Antalyaspor Turkish Süper Lig (1)',
       'Dijon FCO French Ligue 1 (1)',
       'FC Midtjylland Danish Superliga (1)',
       'Junior FC Colombian Liga Postobón (1)',
       'Girona FC Spanish Segunda División (2)',
       'Peñarol Uruguayan Primera División (1)',
       'Alanyaspor Turkish Süper Lig (1)',
       'Atlético Clube Goianiense Campeonato Brasileiro Série A (1)',
       'Inter Miami USA Major League Soccer (1)',
       'Reading English League Championship (2)',
       'Blackburn Rovers English League Championship (2)',
       'CD Tenerife Spanish Segunda División (2)',
       'Fatih Karagümrük S.K. Turkish Süper Lig (1)',
       'Sheffield Wednesday English League Championship (2)',
       'Toronto FC USA Major League Soccer (1)',
       'Newells Old Boys Argentina Primera División (1)',
       'En Avant de Guingamp French Ligue 2 (2)',
       'Club Tijuana Mexican Liga MX (1)',
       'Malmö FF Swedish Allsvenskan (1)',
       'Club Atlético Banfield Argentina Primera División (1)',
       'Guadalajara Mexican Liga MX (1)', 'U.N.A.M. Mexican Liga MX (1)',
       'Deportivo Toluca Mexican Liga MX (1)',
       'Lecce Italian Serie A (1)',
       'Millwall English League Championship (2)',
       'Los Angeles FC USA Major League Soccer (1)',
       'Shandong Luneng TaiShan FC Chinese Super League (1)',
       'Kawasaki Frontale Japanese J. League Division 1 (1)',
       'Bristol City English League Championship (2)',
       'Crotone Italian Serie A (1)',
       'MKE Ankaragücü Turkish Süper Lig (1)',
       'Huddersfield Town English League Championship (2)', 'Spezia',
       'Gençlerbirliği SK Turkish Süper Lig (1)',
       'Swansea City English League Championship (2)',
       'Atiker Konyaspor Turkish Süper Lig (1)',
       '1. FC Nürnberg German 2. Bundesliga (2)',
       'DC United USA Major League Soccer (1)',
       'Denizlispor Turkish Süper Lig (1)',
       'Sporting Kansas City USA Major League Soccer (1)',
       'Gazişehir Gaziantep F.K. Turkish Süper Lig (1)',
       'New York City FC USA Major League Soccer (1)',
       'Brescia Italian Serie A (1)',
       'Ulsan Hyundai FC Korean K League Classic (1)',
       'AC Monza Italian Serie B (2)', 'FC Lorient French Ligue 1 (1)',
       'Rayo Vallecano Spanish Segunda División (2)',
       'CFR Cluj Romanian Liga I (1)',
       'Kasimpaşa SK Turkish Süper Lig (1)',
       'Real Zaragoza Spanish Segunda División (2)',
       'Atlanta United USA Major League Soccer (1)',
       'Club Atlas Mexican Liga MX (1)',
       'LASK Linz Austrian Football Bundesliga (1)',
       'Al Ahli Saudi Abdul L. Jameel League (1)',
       'Philadelphia Union USA Major League Soccer (1)',
       'Middlesbrough English League Championship (2)',
       'Independiente del Valle Ecuadorian Serie A (1)',
       'Toulouse Football Club French Ligue 2 (2)',
       'Amiens SC French Ligue 2 (2)',
       'Vissel Kobe Japanese J. League Division 1 (1)',
       'Cerezo Osaka Japanese J. League Division 1 (1)',
       'Yokohama F. Marinos Japanese J. League Division 1 (1)',
       'Minnesota United FC USA Major League Soccer (1)',
       'ESTAC Troyes French Ligue 2 (2)',
       'Atlético de San Luis Mexican Liga MX (1)',
       'Rosenborg BK Norwegian Eliteserien (1)',
       'SC Paderborn 07 German 2. Bundesliga (2)',
       'Portimonense SC Portuguese Liga ZON SAGRES (1)',
       'AJ Auxerre French Ligue 2 (2)',
       'Al Shabab Saudi Abdul L. Jameel League (1)',
       'Puebla FC Mexican Liga MX (1)',
       'Legia Warszawa Polish T-Mobile Ekstraklasa (1)',
       'Kaizer Chiefs South African Premier Division (1)',
       'Al Ittihad Saudi Abdul L. Jameel League (1)',
       'SV Sandhausen German 2. Bundesliga (2)',
       'CD Nacional Portuguese Liga ZON SAGRES (1)',
       'FC Paços de Ferreira Portuguese Liga ZON SAGRES (1)',
       'Unión de Santa Fe Argentina Primera División (1)',
       'Clube Sport Marítimo Portuguese Liga ZON SAGRES (1)',
       'Lech Poznań Polish T-Mobile Ekstraklasa (1)',
       'Moreirense FC Portuguese Liga ZON SAGRES (1)',
       'Willem II Holland Eredivisie (1)',
       'Vitesse Holland Eredivisie (1)',
       '1. FC Heidenheim 1846 German 2. Bundesliga (2)',
       'KV Mechelen Belgian Jupiler Pro League (1)',
       'LDU Quito Ecuadorian Serie A (1)',
       'FCSB (Steaua) Romanian Liga I (1)',
       'Shanghai SIPG FC Chinese Super League (1)',
       'SV Zulte-Waregem Belgian Jupiler Pro League (1)',
       'Santa Clara Portuguese Liga ZON SAGRES (1)',
       'VfL Bochum 1848 German 2. Bundesliga (2)',
       'Molde FK Norwegian Eliteserien (1)',
       'Göztepe SK Turkish Süper Lig (1)',
       'SV Darmstadt 98 German 2. Bundesliga (2)',
       'New York Red Bulls USA Major League Soccer (1)',
       'New England Revolution USA Major League Soccer (1)',
       'Chicago Fire USA Major League Soccer (1)',
       'FC Dallas USA Major League Soccer (1)',
       'LA Galaxy USA Major League Soccer (1)',
       'Jeonbuk Hyundai Motors Korean K League Classic (1)',
       'Real Sporting de Gijón Spanish Segunda División (2)',
       'Fortaleza Campeonato Brasileiro Série A (1)',
       'Stade Malherbe Caen French Ligue 2 (2)',
       'Ceará Sporting Club Campeonato Brasileiro Série A (1)',
       'Mazatlán FC Mexican Liga MX (1)',
       'UD Las Palmas Spanish Segunda División (2)',
       'KAS Eupen Belgian Jupiler Pro League (1)',
       'Orlando City SC USA Major League Soccer (1)',
       'América de Cali Colombian Liga Postobón (1)',
       'Atlético Nacional Colombian Liga Postobón (1)',
       'FC Juárez Mexican Liga MX (1)',
       'KV Kortrijk Belgian Jupiler Pro League (1)',
       'Rosario Central Argentina Primera División (1)',
       'SK Rapid Wien Austrian Football Bundesliga (1)',
       'FK Austria Wien Austrian Football Bundesliga (1)',
       'Club Necaxa Mexican Liga MX (1)',
       'Sanfrecce Hiroshima Japanese J. League Division 1 (1)',
       'Queens Park Rangers English League Championship (2)',
       'FC Emmen Holland Eredivisie (1)',
       'Kashiwa Reysol Japanese J. League Division 1 (1)',
       'Kashima Antlers Japanese J. League Division 1 (1)',
       'Montreal Impact USA Major League Soccer (1)',
       'Karlsruher SC German 2. Bundesliga (2)',
       'Universitatea Craiova Romanian Liga I (1)',
       'San Jose Earthquakes USA Major League Soccer (1)',
       'Málaga CF Spanish Segunda División (2)',
       'Albacete BP Spanish Segunda División (2)',
       'Holstein Kiel German 2. Bundesliga (2)',
       'Orlando Pirates South African Premier Division (1)',
       'Al Ain FC UAE Arabian Gulf League (1)',
       'Atlético Tucumán Argentina Primera División (1)',
       'Gil Vicente FC Portuguese Liga ZON SAGRES (1)',
       'Os Belenenses Portuguese Liga ZON SAGRES (1)',
       'Shanghai Greenland Shenhua FC Chinese Super League (1)',
       'FC Groningen Holland Eredivisie (1)',
       'Dinamo Bucureşti Romanian Liga I (1)',
       'Beerschot AC Belgian Jupiler Pro League (1)',
       'Hatayspor Turkish Süper Lig (1)',
       'Sint-Truidense VV Belgian Jupiler Pro League (1)',
       'Famalicão Portuguese Liga ZON SAGRES (1)',
       'AIK Swedish Allsvenskan (1)',
       'Colorado Rapids USA Major League Soccer (1)',
       'Houston Dynamo USA Major League Soccer (1)',
       'Chievo Verona Italian Serie B (2)',
       'Djurgårdens IF Swedish Allsvenskan (1)',
       'Royal Excel Mouscron Belgian Jupiler Pro League (1)',
       'Empoli Italian Serie B (2)',
       'FC Seoul Korean K League Classic (1)',
       'Real Salt Lake USA Major League Soccer (1)',
       'Gimnasia y Esgrima La Plata Argentina Primera División (1)',
       'Nagoya Grampus Japanese J. League Division 1 (1)',
       'Gamba Osaka Japanese J. League Division 1 (1)',
       'AD Alcorcón Spanish Segunda División (2)',
       'VfL Osnabrück German 2. Bundesliga (2)',
       'SD Ponferradina Spanish Segunda División (2)',
       'Farense Portuguese Liga ZON SAGRES (1)',
       'Real Oviedo Spanish Segunda División (2)',
       'BB Erzurumspor Turkish Süper Lig (1)',
       'CD Lugo Spanish Segunda División (2)',
       'Millonarios FC Colombian Liga Postobón (1)',
       'Nashville SC USA Major League Soccer (1)',
       'FC Cartagena Spanish Segunda División (2)',
       'Oud-Heverlee Leuven Belgian Jupiler Pro League (1)',
       'FC St. Pauli German 2. Bundesliga (2)',
       'FC Erzgebirge Aue German 2. Bundesliga (2)',
       'FC Cincinnati USA Major League Soccer (1)',
       'Coventry City English League Championship (2)',
       'Brøndby IF Danish Superliga (1)',
       'Aarhus GF Danish Superliga (1)',
       'Al Wehda Saudi Abdul L. Jameel League (1)',
       'FC Viitorul Romanian Liga I (1)',
       'FC Tokyo Japanese J. League Division 1 (1)',
       'Club Atlético Talleres Argentina Primera División (1)',
       'Oita Trinita Japanese J. League Division 1 (1)',
       'Jiangsu Suning FC Chinese Super League (1)',
       'Aalborg BK Danish Superliga (1)',
       'Arsenal de Sarandí Argentina Primera División (1)',
       'Hokkaido Consadole Sapporo Japanese J. League Division 1 (1)',
       'IFK Göteborg Swedish Allsvenskan (1)',
       'Waasland-Beveren Belgian Jupiler Pro League (1)',
       'Central Córdoba Argentina Primera División (1)',
       'Aberdeen Scottish Premiership (1)',
       'Wisła Kraków Polish T-Mobile Ekstraklasa (1)',
       'Godoy Cruz Argentina Primera División (1)',
       'Club Atlético Aldosivi Argentina Primera División (1)',
       'AC Ajaccio French Ligue 2 (2)',
       'FC Twente Holland Eredivisie (1)',
       'Valenciennes FC French Ligue 2 (2)',
       'Club Bolívar Liga de Fútbol Profesional Boliviano (1)',
       'SC Heerenveen Holland Eredivisie (1)',
       'PEC Zwolle Holland Eredivisie (1)',
       'FC Luzern Swiss Super League (1)',
       'Luton Town English League Championship (2)',
       'CD Tondela Portuguese Liga ZON SAGRES (1)',
       'Barcelona Sporting Club Ecuadorian Serie A (1)',
       'FK Bodø/Glimt Norwegian Eliteserien (1)',
       'Deportivo Binacional Peruvian Primera División (1)',
       'Unión La Calera Chilian Campeonato Nacional (1)',
       'Jagiellonia Białystok Polish T-Mobile Ekstraklasa (1)',
       'Pogoń Szczecin Polish T-Mobile Ekstraklasa (1)',
       'Wuhan Zall Chinese Super League (1)',
       'Eintracht Braunschweig German 2. Bundesliga (2)',
       'SpVgg Greuther Fürth German 2. Bundesliga (2)',
       'KV Oostende Belgian Jupiler Pro League (1)',
       'IFK Norrköping Swedish Allsvenskan (1)',
       'Pohang Steelers Korean K League Classic (1)',
       'Hammarby IF Swedish Allsvenskan (1)',
       'Paris FC French Ligue 2 (2)', 'Le Havre AC French Ligue 2 (2)',
       'Wolfsberger AC Austrian Football Bundesliga (1)',
       'Astra Giurgiu Romanian Liga I (1)',
       'SK Sturm Graz Austrian Football Bundesliga (1)',
       'KSV Cercle Brugge Belgian Jupiler Pro League (1)',
       'Suwon Samsung Bluewings Korean K League Classic (1)',
       'Urawa Red Diamonds Japanese J. League Division 1 (1)',
       'UD Logroñés Spanish Segunda División (2)',
       'Club Guaraní Paraguayan Primera División (1)',
       'Deportivo Cali Colombian Liga Postobón (1)',
       'CF Fuenlabrada Spanish Segunda División (2)',
       'Lechia Gdańsk Polish T-Mobile Ekstraklasa (1)',
       'Vancouver Whitecaps FC USA Major League Soccer (1)',
       'Oceânico FC Campeonato Brasileiro Série A (1)',
       'Rotherham United English League Championship (2)',
       'Al Taawoun Saudi Abdul L. Jameel League (1)',
       'Grenoble Foot 38 French Ligue 2 (2)',
       'Odense Boldklub Danish Superliga (1)',
       'Clermont Foot 63 French Ligue 2 (2)',
       'Heracles Almelo Holland Eredivisie (1)',
       'Shimizu S-Pulse Japanese J. League Division 1 (1)',
       'SSV Jahn Regensburg German 2. Bundesliga (2)',
       'Sparta Rotterdam Holland Eredivisie (1)',
       'Sydney FC Australian Hyundai A-League (1)',
       'VVV-Venlo Holland Eredivisie (1)',
       'Coquimbo Unido Chilian Campeonato Nacional (1)',
       'Querétaro Mexican Liga MX (1)',
       'Hibernian Scottish Premiership (1)',
       'Kilmarnock Scottish Premiership (1)',
       'Motherwell Scottish Premiership (1)',
       'Charlton Athletic English League One (3)',
       'Sunderland English League One (3)',
       'Deportivo Pasto Colombian Liga Postobón (1)',
       'RKC Waalwijk Holland Eredivisie (1)',
       'FC Würzburger Kickers German 2. Bundesliga (2)',
       'Fortuna Sittard Holland Eredivisie (1)',
       'Jorge Wilstermann Liga de Fútbol Profesional Boliviano (1)',
       'FC St. Gallen Swiss Super League (1)',
       'FC Ingolstadt 04 German 3. Bundesliga (3)',
       'Emelec Ecuadorian Serie A (1)',
       'Barnsley English League Championship (2)',
       'Wycombe Wanderers English League Championship (2)',
       'Delfín SC Ecuadorian Serie A (1)',
       'SK Brann Norwegian Eliteserien (1)',
       'Vålerenga Fotball Norwegian Eliteserien (1)',
       'Cracovia Polish T-Mobile Ekstraklasa (1)',
       'Shenzhen FC Chinese Super League (1)',
       'Hull City English League One (3)',
       'FC Botoşani Romanian Liga I (1)',
       'Henan Jianye FC Chinese Super League (1)',
       'CE Sabadell FC Spanish Segunda División (2)',
       'FC Sion Swiss Super League (1)',
       'IF Elfsborg Swedish Allsvenskan (1)',
       'Vegalta Sendai Japanese J. League Division 1 (1)',
       'BK Häcken Swedish Allsvenskan (1)',
       'La Berrichonne de Châteauroux French Ligue 2 (2)',
       'Ettifaq FC Saudi Abdul L. Jameel League (1)',
       'TSV Hartberg Austrian Football Bundesliga (1)',
       'FC Sochaux-Montbéliard French Ligue 2 (2)',
       'Audax Italiano Chilian Campeonato Nacional (1)',
       'SV Wehen Wiesbaden German 3. Bundesliga (3)',
       'Piast Gliwice Polish T-Mobile Ekstraklasa (1)',
       'C.D. Castellón Spanish Segunda División (2)',
       'Śląsk Wrocław Polish T-Mobile Ekstraklasa (1)',
       'CD Mirandés Spanish Segunda División (2)',
       'Patronato Argentina Primera División (1)',
       'SG Dynamo Dresden German 3. Bundesliga (3)',
       'Gaz Metan Mediaş Romanian Liga I (1)',
       'Portsmouth English League One (3)',
       'Al Faisaly Saudi Abdul L. Jameel League (1)',
       'Sangju Sangmu FC Korean K League Classic (1)',
       'Daegu FC Korean K League Classic (1)',
       'Al Raed Saudi Abdul L. Jameel League (1)',
       'Shonan Bellmare Japanese J. League Division 1 (1)',
       'SV Ried Austrian Football Bundesliga (1)',
       'Chamois Niortais Football Club French Ligue 2 (2)',
       'FC Hansa Rostock German 3. Bundesliga (3)',
       '1. FC Kaiserslautern German 3. Bundesliga (3)',
       'AS Nancy Lorraine French Ligue 2 (2)',
       'Nacional Asunción Paraguayan Primera División (1)',
       'Wisła Płock Polish T-Mobile Ekstraklasa (1)',
       'Rodez Aveyron Football French Ligue 2 (2)',
       'Viking FK Norwegian Eliteserien (1)',
       'Guangzhou R&F FC Chinese Super League (1)',
       'Yokohama FC Japanese J. League Division 1 (1)',
       'FC Lugano Swiss Super League (1)',
       'Kristiansund BK Norwegian Eliteserien (1)',
       'Viktoria Köln German 3. Bundesliga (3)',
       'Vejle Boldklub Danish Superliga (1)',
       'River Plate Montevideo Uruguayan Primera División (1)',
       'Servette FC Swiss Super League (1)',
       'Sarpsborg 08 FF Norwegian Eliteserien (1)',
       'Sport Huancayo Peruvian Primera División (1)',
       'Hebei China Fortune FC Chinese Super League (1)',
       'Ipswich Town English League One (3)',
       'Club Atlético Huracán Argentina Primera División (1)',
       'Club Atlético Tigre Argentina Primera División (1)',
       'FC Zürich Swiss Super League (1)',
       'Fleetwood Town English League One (3)',
       'Blackpool English League One (3)',
       'ADO Den Haag Holland Eredivisie (1)',
       'SD Aucas Ecuadorian Serie A (1)',
       'River Plate Asunción Paraguayan Primera División (1)',
       'Always Ready Liga de Fútbol Profesional Boliviano (1)',
       'Peterborough United English League One (3)',
       'Stabæk Fotball Norwegian Eliteserien (1)',
       'Universidad Católica del Ecuador Ecuadorian Serie A (1)',
       'Raków Częstochowa Polish T-Mobile Ekstraklasa (1)',
       'Centro Atlético Fénix Uruguayan Primera División (1)',
       'Zagłębie Lubin Polish T-Mobile Ekstraklasa (1)',
       'Tianjin TEDA FC Chinese Super League (1)',
       'Oxford United English League One (3)',
       'SCR Altach Austrian Football Bundesliga (1)',
       'Alianza Lima Peruvian Primera División (1)',
       'Górnik Zabrze Polish T-Mobile Ekstraklasa (1)',
       'KFC Uerdingen 05 German 3. Bundesliga (3)',
       'SønderjyskE Danish Superliga (1)',
       'SpVgg Unterhaching German 3. Bundesliga (3)',
       'Helsingborgs IF Swedish Allsvenskan (1)',
       'Odds BK Norwegian Eliteserien (1)',
       'Sol de América Paraguayan Primera División (1)',
       'Liverpool Fútbol Club Uruguayan Primera División (1)',
       'CD Huachipato Chilian Campeonato Nacional (1)',
       'Sepsi OSK Romanian Liga I (1)',
       'El Nacional Ecuadorian Serie A (1)',
       'FC Hermannstadt Romanian Liga I (1)',
       'Melgar FBC Peruvian Primera División (1)',
       'Independiente Medellín Colombian Liga Postobón (1)',
       'Pau FC French Ligue 2 (2)',
       'Gangwon FC Korean K League Classic (1)',
       'Randers FC Danish Superliga (1)',
       'Dalian YiFang FC Chinese Super League (1)',
       'FC Nordsjælland Danish Superliga (1)',
       'SV Meppen German 3. Bundesliga (3)',
       'Milton Keynes Dons English League One (3)',
       'Al Fateh Saudi Abdul L. Jameel League (1)',
       'Salford City English League Two (4)',
       'Sagan Tosu Japanese J. League Division 1 (1)',
       '1. FC Saarbrücken German 3. Bundesliga (3)',
       'Cusco FC Peruvian Primera División (1)',
       'FC Voluntari Romanian Liga I (1)',
       'TSV 1860 München German 3. Bundesliga (3)',
       'MSV Duisburg German 3. Bundesliga (3)',
       'IK Sirius Swedish Allsvenskan (1)',
       'Damac FC Saudi Abdul L. Jameel League (1)',
       'Dundalk Rep. Ireland Airtricity League (1)',
       'FC Lausanne-Sport Swiss Super League (1)',
       'Al Hazem Saudi Abdul L. Jameel League (1)',
       'Melbourne City FC Australian Hyundai A-League (1)',
       'Western United FC Australian Hyundai A-League (1)',
       'Club Plaza Colonia Uruguayan Primera División (1)',
       'Livingston FC Scottish Premiership (1)',
       'Club Blooming Liga de Fútbol Profesional Boliviano (1)',
       'Wigan Athletic English League One (3)',
       'Shrewsbury English League One (3)',
       'GwangJu FC Korean K League Classic (1)',
       'Hallescher FC German 3. Bundesliga (3)',
       'Lyngby BK Danish Superliga (1)',
       'Strømsgodset IF Norwegian Eliteserien (1)',
       'Al Fayha Saudi Abdul L. Jameel League (1)',
       'AC Horsens Danish Superliga (1)',
       'Burton Albion English League One (3)',
       'USL Dunkerque French Ligue 2 (2)',
       'Incheon United FC Korean K League Classic (1)',
       'Dundee United Scottish Premiership (1)',
       'WSG Tirol Austrian Football Bundesliga (1)',
       'Örebro SK Swedish Allsvenskan (1)',
       'Busan IPark Korean K League Classic (1)',
       'St. Johnstone FC Scottish Premiership (1)',
       'SV Waldhof Mannheim German 3. Bundesliga (3)',
       'SKN St. Pölten Austrian Football Bundesliga (1)',
       'FC Admira Wacker Mödling Austrian Football Bundesliga (1)',
       'Seongnam FC Korean K League Classic (1)',
       'Politehnica Iaşi Romanian Liga I (1)',
       'HJK Helsinki Finnish Veikkausliiga (1)',
       'FC Chambly Oise French Ligue 2 (2)',
       '1. FC Magdeburg German 3. Bundesliga (3)',
       'FSV Zwickau German 3. Bundesliga (3)',
       'Bolton Wanderers English League Two (4)',
       'Gillingham English League One (3)',
       'Östersunds FK Swedish Allsvenskan (1)',
       'Nacional Potosí Liga de Fútbol Profesional Boliviano (1)',
       'Mjøndalen IF Norwegian Eliteserien (1)',
       'VfB Lübeck German 3. Bundesliga (3)',
       'Perth Glory Australian Hyundai A-League (1)',
       'Shamrock Rovers Rep. Ireland Airtricity League (1)',
       'Stal Mielec Polish T-Mobile Ekstraklasa (1)',
       'Bayern München II German 3. Bundesliga (3)',
       'Crewe Alexandra English League One (3)',
       'Oriente Petrolero Liga de Fútbol Profesional Boliviano (1)',
       'Port Vale English League Two (4)',
       'Plymouth Argyle English League One (3)',
       'Northampton Town English League One (3)',
       'Caracas FC Venezuelan Primera División (1)',
       'Doncaster Rovers English League One (3)',
       'Swindon Town English League One (3)',
       'Colchester United English League Two (4)',
       'AC Mineros de Guayana Venezuelan Primera División (1)',
       'Mansfield Town English League Two (4)',
       'Lincoln City English League One (3)',
       'Wellington Phoenix Australian Hyundai A-League (1)',
       'UTA Arad Romanian Liga I (1)',
       'Kalmar FF Swedish Allsvenskan (1)',
       'Abha Club Saudi Abdul L. Jameel League (1)',
       'Bristol Rovers English League One (3)',
       'FK Haugesund Norwegian Eliteserien (1)',
       'St. Mirren Scottish Premiership (1)',
       'Tranmere Rovers English League Two (4)',
       'Türkgücü München German 3. Bundesliga (3)',
       'Estudiantes de Mérida Venezuelan Primera División (1)',
       'Chindia Târgovişte Romanian Liga I (1)',
       'IK Start Norwegian Eliteserien (1)',
       'Walsall English League Two (4)',
       'Bradford City English League Two (4)',
       'Aragua FC Venezuelan Primera División (1)',
       'FC Vaduz Swiss Super League (1)',
       'Chongqing Dangdai Lifan FC SWM Team Chinese Super League (1)',
       'Newcastle Jets Australian Hyundai A-League (1)',
       'Falkenbergs FF Swedish Allsvenskan (1)',
       'Western Sydney Wanderers Australian Hyundai A-League (1)',
       'Forest Green Rovers English League Two (4)',
       'Qingdao Huanghai F.C. Chinese Super League (1)',
       'Shijiazhuang Ever Bright F.C. Chinese Super League (1)',
       'Ross County FC Scottish Premiership (1)',
       'Warta Poznań Polish T-Mobile Ekstraklasa (1)',
       'Oldham Athletic English League Two (4)',
       'AFC Wimbledon English League One (3)',
       'Exeter City English League Two (4)',
       'Cheltenham Town English League Two (4)',
       'FC Argeș Romanian Liga I (1)', 'Rochdale English League One (3)',
       'SC Verl German 3. Bundesliga (3)',
       'Club Atlético Grau Peruvian Primera División (1)',
       'Al Adalah Saudi Abdul L. Jameel League (1)',
       'Mjällby AIF Swedish Allsvenskan (1)',
       'Aalesunds FK Norwegian Eliteserien (1)',
       'Sandefjord Fotball Norwegian Eliteserien (1)',
       'Accrington Stanley English League One (3)',
       'Podbeskidzie Bielsko-Biała Polish T-Mobile Ekstraklasa (1)',
       'Academica Clinceni Romanian Liga I (1)',
       'Adelaide United Australian Hyundai A-League (1)',
       'Crawley Town English League Two (4)',
       'Varbergs BoIS Swedish Allsvenskan (1)',
       'Grimsby Town English League Two (4)',
       'Morecambe English League Two (4)',
       'Newport County English League Two (4)',
       'Scunthorpe United English League Two (4)',
       'Sportivo Luqueño Paraguayan Primera División (1)',
       'Southend United English League Two (4)',
       'Leyton Orient English League Two (4)',
       'Macarthur FC Australian Hyundai A-League (1)',
       'Zamora FC Venezuelan Primera División (1)',
       'Brisbane Roar Australian Hyundai A-League (1)',
       'Bohemian FC Rep. Ireland Airtricity League (1)',
       'Stevenage English League Two (4)',
       'Barrow English League Two (4)',
       'Cambridge United English League Two (4)',
       'Hamilton Academical FC Scottish Premiership (1)',
       'Carlisle United English League Two (4)',
       'Central Coast Mariners Australian Hyundai A-League (1)',
       'Melbourne Victory Australian Hyundai A-League (1)',
       'Harrogate Town English League Two (4)',
       'St. Patricks Athletic Rep. Ireland Airtricity League (1)',
       'Derry City Rep. Ireland Airtricity League (1)',
       'Llaneros de Guanare Venezuelan Primera División (1)',
       'Sligo Rovers Rep. Ireland Airtricity League (1)',
       'Shelbourne FC Rep. Ireland Airtricity League (1)',
       'Cork City Rep. Ireland Airtricity League (1)',
       'Finn Harps Rep. Ireland Airtricity League (1)',
       'Waterford FC Rep. Ireland Airtricity League (1)'];
       
        
    
        for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
        }
        
       
        
        for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select2.appendChild(el);
        }

	
	

	