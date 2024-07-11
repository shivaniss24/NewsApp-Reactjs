
import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
     articles=[
        {
            "source":{"id":null,"name":"BBC News"},
            "author":null,
            "title":"Israeli military tells all Gaza City residents to evacuate - BBC.com",
            "description":"Leaflets addressed to \"everyone\" in the city are dropped instructing them to head to central Gaza.","url":"https://www.bbc.com/news/articles/cy08nl4plvzo","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/6db2/live/6875e9b0-3eb7-11ef-9e1c-3b4a473456a6.jpg",
            "publishedAt":"2024-07-10T12:00:19Z",
            "content":"By Tom Bennett and Rushdi Abualouf, BBC News in London and Istanbul\r\nThe Israeli military has told all residents of Gaza City to evacuate south to the central Gaza Strip, amid an intensified offensiv… [+2949 chars]"
            },
            {
                "source":{"id":null,"name":"BBC News"},
                "author":null,
                "title":"Attempted carjacker shot outside Supreme Court Justice Sonia Sotomayor's home - BBC.com",
                "description":"The incident happened outside Justice Sonia Sotomayor’s home when an armed man approached a US Marshal's car.",
                "url":"https://www.bbc.com/news/articles/c1we6xy7q7qo",
                "urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/7bf5/live/abef1380-3ea6-11ef-8778-2143088d857f.jpg","publishedAt":"2024-07-10T11:39:19Z",
                "content":"A Deputy US Marshal shot a would-be carjacker while he was guarding Supreme Court Justice Sonia Sotomayors home in Washington DC, authorities said.\r\nThe man was shot after approaching the car the off… [+1815 chars]"
                },
                {
                    "source":{"id":"nbc-news","name":"NBC News"},
                    "author":"Alexander Smith","title":"Manhunt launched in U.K. for crossbow-armed triple murder suspect - NBC News","description":"British police launched a manhunt for a suspect armed with a crossbow after three women were killed in the Hertfordshire town of Bushey, near London.",
                    "url":"https://www.nbcnews.com/news/world/manhunt-uk-crossbow-armed-triple-murder-suspect-rcna161074","urlToImage":"https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-07/240710-watford-crossbow-mb-1118-3a09d4.jpg",
                    "publishedAt":"2024-07-10T11:17:58Z",
                    "content":"LONDON A manhunt has been launched for a crossbow-wielding suspect Wednesday after three women in the same family were killed in a house north of London, police said.\r\nAuthorities warned the public n… [+2720 chars]"
                    },
                {
                    "source":{"id":null,"name":"Houston Chronicle"},
                    "author":"Houston Chronicle staff",
                    "title":"Live updates: Latest on Houston power outages and Beryl recovery efforts - Houston Chronicle ","description":"More than 1.3 million residents were still in the dark two days after Hurricane Beryl ripped through Houston. Follow along here for live updates.",
                    "url":"https://www.houstonchronicle.com/news/houston-weather/hurricanes/article/hurricane-beryl-power-updates-houston-heat-19563819.php",
                    "urlToImage":"https://s.hdnux.com/photos/01/40/53/61/25345098/3/rawImage.jpg",
                    "publishedAt":"2024-07-10T11:15:00Z",
                    "content":"A convoy of electric trucks from several different states gather to support power outage efforts the day after Hurricane Beryl made landfall in Houston causing mass power outages on Tuesday, July 9, … [+9337 chars]"
                    },
                    {
                        "source":{"id":"cbs-news","name":"CBS News"},
                        "author":null,
                        "title":"Businesswoman who complained about cartel extortion and illegal fishing is shot dead in Mexico - CBS News",
                        "description":"Minerva Pérez was killed in what the state prosecutor described as a direct assassination attack that riddled the victim with several gunshot wounds.",
                        "url":"https://www.cbsnews.com/news/minerva-perez-killed-fisheries-leader-complained-cartel-extortion-shot-dead-mexico/",
                        "urlToImage":"https://assets3.cbsnewsstatic.com/hub/i/r/2024/07/10/6bd845c5-863c-454a-b8ef-bea4ea4fa8bd/thumbnail/1200x630g3/ea9a778ae1c9cf41bd677a90932fd1b6/minerva-atenea.jpg?v=2287029998c5246c93d6dd038eb30603","publishedAt":"2024-07-10T11:12:15Z",
                        "content":"A Mexican fisheries industry leader who complained of drug cartel extortion and illegal fishing was shot to death in the northern border state of Baja California, authorities said Tuesday.\r\nUnidentif… [+4503 chars]"
                        },
                        {
                            "source":{"id":"google-news","name":"Google News"},
                            "author":"NBC News",
                            "title":"Alec Baldwin's 'Rust' trial begins and 'hyperactive' hurricane season predicted after Beryl: Morning Rundown - NBC News",
                            "description":null,
                            "url":"https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3MvYWxlYy1iYWxkd2luLXJ1c3QtdHJpYWwtaHVycmljYW5lLXNlYXNvbi1iZXJ5bC1tb3JuaW5nLXJ1bmRvd24tcmNuYTE2MTA2ONIBK2h0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3MvYW1wL3JjbmExNjEwNjg?oc=5","urlToImage":null,
                            "publishedAt":"2024-07-10T11:08:04Z",
                            "content":null},
                            {
                            "source":{"id":"cnn","name":"CNN"},
                            "author":"Piper HudspethBlackburn",
                            "title":"Bennet becomes first Democratic senator to publicly turn on Biden, warning of a GOP ‘landslide’ - CNN",
                            "description":"Sen. Michael Bennet on Tuesday became the first Democratic senator to publicly say he doesn’t believe President Joe Biden is capable of winning reelection after his disastrous debate performance last month.",
                            "url":"https://www.cnn.com/2024/07/09/politics/senate-democrat-michael-bennet-biden-reelection-cnntv/index.html",
                            "urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/still-20775808-75135-still.jpg?c=16x9&q=w_800,c_fill",
                            "publishedAt":"2024-07-10T11:04:00Z",
                            "content":"Sen. Michael Bennet on Tuesday became the first Democratic senator to publicly say he doesnt believe President Joe Biden is capable of winning reelection after his disastrous debate performance last … [+3278 chars]"
                            },
                            {
                                "source":{"id":"the-verge","name":"The Verge"},
                                "author":"Wes Davis",
                                "title":"Where to watch Samsung’s Galaxy Unpacked event on Wednesday - The Verge",
                                "description":"Samsung will talk Galaxy AI and foldables at Galaxy Unpacked on Wednesday, July 10th, and may also reveal new wearables, including the Galaxy Ring.",
                                "url":"https://www.theverge.com/2024/7/10/24194483/samsung-galaxy-unpacked-watch-live-stream-start-time","urlToImage":"https://cdn.vox-cdn.com/thumbor/JRR67NMmAucq1EQYO5KOQ-coSPI=/0x0:1145x688/1200x628/filters:focal(573x344:574x345)/cdn.vox-cdn.com/uploads/chorus_asset/file/25522346/Screenshot_2024_07_08_at_3.15.13_PM.png",
                                "publishedAt":"2024-07-10T11:00:00Z",
                                "content":"Where to watch Samsungs Galaxy Unpacked event\r\nWhere to watch Samsungs Galaxy Unpacked event\r\n / Samsung is livestreaming Unpacked at 9AM ET on July 10th.\r\nByWes Davis, a weekend editor who covers th… [+233 chars]"
                                },
                                {"source":{"id":null,"name":"New York Post"},
                                "author":"Nika Shakhnazarova",
                                "title":"Ben Affleck, Jennifer Garner's daughter Violet reveals she contracted a post-viral condition, demands 'mask mandates' - New York Post ",
                                "description":"The 18-year-old daughter of Ben Affleck and Jennifer Garner shared her personal experience with recovering from viruses.",
                                "url":"https://nypost.com/2024/07/10/us-news/ben-affleck-jennifer-garners-daughter-violet-reveals-she-contracted-a-post-viral-condition-demands-mask-mandates/",
                                "urlToImage":"https://nypost.com/wp-content/uploads/sites/2/2024/07/85211680.jpg?quality=75&strip=all&w=1024",
                                "publishedAt":"2024-07-10T10:49:00Z",
                                "content":"Jennifer Garner and Ben Affleck’s eldest child revealed that she contracted a post-viral condition in 2019 as she demanded mask mandates in LA hospitals during a city board meeting on Tuesday. \r\nViol… [+3301 chars]"
                                },
                                {
                                    "source":{"id":"abc-news","name":"ABC News"},
                                    "author":"Max Golembo",
                                    "title":"Beryl remnants move into Northeast, bringing flash flood and tornado threats - ABC News","description":"More than 1.7 million customers remained without power in Texas early Wednesday.","url":"https://abcnews.go.com/US/hurricane-beryl-northeast-flash-flood-tornado-remnants/story?id=111802565",
                                    "urlToImage":"https://i.abcnewsfe.com/a/47447b5e-046f-41b6-951a-eaeea663a3aa/indiana-tornado_1720605024628_hpMain_16x9.jpg?w=1600",
                                    "publishedAt":"2024-07-10T10:13:19Z",
                                    "content":"Even though Beryl lost its status as a tropical storm, it still packed a punch as it moved from Arkansas to Michigan, bringing with it tornadoes and flash flooding.\r\nThe remnants of the storm, which … [+1300 chars]"
                                    },
                                    {
                                        "source":{"id":"the-verge","name":"The Verge"},
                                        "author":"Tom Warren",
                                        "title":"Microsoft and Apple ditch OpenAI board seats amid regulatory scrutiny - The Verge","description":"Microsoft will no longer have a board seat at OpenAI. Apple is also ditching its plans for a non-voting seat, all amid regulatory scrutiny of Big Tech AI deals.",
                                        "url":"https://www.theverge.com/2024/7/10/24195528/microsoft-apple-openai-board-observer-seat-drop-regulator-scrutiny",
                                        "urlToImage":"https://cdn.vox-cdn.com/thumbor/IujUpgnOiQg4gtWhZOyng69_hUk=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25418233/STK095_MICROSOFT_CVirginia_A.jpg",
                                        "publishedAt":"2024-07-10T09:19:26Z",
                                        "content":"Microsoft and Apple ditch OpenAI board seats amid regulatory scrutiny\r\nMicrosoft and Apple ditch OpenAI board seats amid regulatory scrutiny\r\n / OpenAI switches to stakeholder meetings instead of boa… [+2350 chars]"
                                        },
                                        {
                                            "source":{"id":"abc-news","name":"ABC News"},
                                            "author":"Mary Kekatos",
                                            "title":"NASA astronauts, stuck on ISS after issues with Boeing's Starliner, to give press conference - ABC News",
                                            "description":"Butch Wilmore and Suni Williams were orginally to return to Earth on June 14.","url":"https://abcnews.go.com/Technology/nasa-astronauts-stuck-iss-after-issues-boeings-starliner/story?id=111770374","urlToImage":"https://i.abcnewsfe.com/a/a8901c88-f7ad-436b-a1b1-89bdd9ec541f/boeing-starliner-astronauts-rt-lv-240709_1720543978684_hpMain_16x9.jpg?w=1600","publishedAt":"2024-07-10T09:15:24Z",
                                            "content":"The NASA astronauts who were aboard the first crewed flight into space on Boeing's Starliner will participate in a press conference on Wednesday morning.\r\nFlight commander Barry \"Butch\" Wilmore, 61, … [+3230 chars]"
                                            },
                                            {
                                                "source":{"id":"google-news","name":"Google News"},
                                                "author":"NPR",
                                                "title":"Ozempic's popularity leads to shortages for people with Type 2 diabetes - NPR","description":null,"url":"https://news.google.com/rss/articles/CBMigwFodHRwczovL3d3dy5ucHIub3JnL3NlY3Rpb25zL3Nob3RzLWhlYWx0aC1uZXdzLzIwMjQvMDcvMTAvbngtczEtNTAwNjEwMy9vemVtcGljLXdlZ292eS1zZW1hZ2x1dGlkZS1zaG9ydGFnZS10eXBlLTItZGlhYmV0ZXMtb2Jlc2l0edIBAA?oc=5",
                                                "urlToImage":null,
                                                "publishedAt":"2024-07-10T09:00:00Z",
                                                "content":null
                                                },
                                                {
                                                    "source":{"id":null,"name":"CNBC"},
                                                    "author":"April Roach",
                                                    "title":"Treasury yields retreat as Fed Chair warns on keeping rates elevated for too long - CNBC",
                                                    "description":"U.S. Treasury bond yields were slightly down after the Federal Reserve chair warned that keeping rates elevated for too long could stunt economic growth.","url":"https://www.cnbc.com/2024/07/10/treasury-yields-retreat-fed-warns-on-keeping-rates-high-for-too-long.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/104621704-GettyImages-824911552.jpg?v=1720600325&w=1920&h=1080",
                                                    "publishedAt":"2024-07-10T08:49:17Z",
                                                    "content":"U.S. Treasury bond yields were slightly down on Wednesday after Federal Reserve Chair Jerome Powell warned that keeping interest rates elevated for too long could stunt economic growth.\r\nThe 10-year … [+1280 chars]"
                                                    },
                                                    {
                                                        "source":{"id":null,"name":"DW (English)"},
                                                        "author":"Deutsche Welle",
                                                        "title":"Australia: Rangers shoot 14 foot crocodile that killed child - DW (English)",
                                                        "description":"The crocodile had killed a 12-year-old girl last week in the Northern Territory. Police confirmed the animal was found and then shot dead.","url":"https://www.dw.com/en/australia-rangers-shoot-14-foot-crocodile-that-killed-child/a-69612876","urlToImage":"https://static.dw.com/image/69613651_6.jpg","publishedAt":"2024-07-10T08:38:45Z",
                                                        "content":"Authorities in Australia said on Wednesday that a 4.2 meter (14-foot) crocodile was located and shot dead by rangers after it killed a 12-year-old girl last week.\r\nNorthern Territory police said in a… [+1395 chars]"
                                                        },
                                                        {
                                                            "source":{"id":"google-news","name":"Google News"},
                                                            "author":"NBC News",
                                                            "title":"'Shrek 5' set for July 2026 with Mike Myers, Eddie Murphy and Cameron Diaz returning - NBC News",
                                                            "description":null,
                                                            "url":"https://news.google.com/rss/articles/CBMidGh0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3MvdXMtbmV3cy9zaHJlay01LXNldC1qdWx5LTIwMjYtbWlrZS1teWVycy1lZGRpZS1tdXJwaHktY2FtZXJvbi1kaWF6LXJldHVybmluZy1yY25hMTYxMDYz0gEraHR0cHM6Ly93d3cubmJjbmV3cy5jb20vbmV3cy9hbXAvcmNuYTE2MTA2Mw?oc=5","urlToImage":null,
                                                            "publishedAt":"2024-07-10T08:19:15Z",
                                                            "content":null
                                                            },
                                                            {
                                                                "source":{"id":"google-news","name":"Google News"},
                                                                "author":"Fox News",
                                                                "title":"NATO summit in DC is 'pivotal' make-or-break for Biden as scrutiny over fitness for office intensifies - Fox News","description":null,
                                                                "url":"https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LmZveG5ld3MuY29tL3BvbGl0aWNzL25hdG8tc3VtbWl0LWRjLXBpdm90YWwtbWFrZS1vci1icmVhay1iaWRlbi1zY3J1dGlueS1maXRuZXNzLW9mZmljZS1pbnRlbnNpZmllc9IBc2h0dHBzOi8vd3d3LmZveG5ld3MuY29tL3BvbGl0aWNzL25hdG8tc3VtbWl0LWRjLXBpdm90YWwtbWFrZS1vci1icmVhay1iaWRlbi1zY3J1dGlueS1maXRuZXNzLW9mZmljZS1pbnRlbnNpZmllcy5hbXA?oc=5",
                                                                "urlToImage":null,
                                                                "publishedAt":"2024-07-10T08:00:00Z",
                                                                "content":null
                                                                },
                                                                {
                                                                    "source":{"id":"ars-technica",
                                                                    "name":"Ars Technica"},
                                                                    "author":"Stephen Clark",
                                                                    "title":"Europe’s first Ariane 6 flight achieved most of its goals, but ended prematurely - Ars Technica",
                                                                    "description":"Ariane 6 launched into orbit, but an upper stage problem kept it from completing the demo flight.",
                                                                    "url":"https://arstechnica.com/space/2024/07/europes-first-ariane-6-flight-achieved-most-of-its-goals-but-ended-prematurely/",
                                                                    "urlToImage":"https://cdn.arstechnica.net/wp-content/uploads/2024/07/GettyImages-2160744209-760x380.jpg","publishedAt":"2024-07-10T06:22:35Z",
                                                                    "content":"Enlarge/ Europe's first Ariane 6 rocket lifts off from a new launch pad in Kourou, French Guiana.\r\n24\r\nThe first European Ariane 6 rocket fired off its launch pad at the edge of the Amazon rainforest… [+12781 chars]"
                                                                    },
                                                                    {
                                                                        "source":{"id":null,"name":"NPR"},
                                                                        "author":null,
                                                                        "title":"A Moscow court orders the arrest of Alexei Navalny's widow, who lives abroad - NPR",
                                                                        "description":"A Moscow court ordered the arrest of the widow of Russian opposition leader Alexei Navalny during a hearing that was conducted in absentia as part of a sweeping Kremlin crackdown on the opposition.",
                                                                        "url":"https://www.npr.org/2024/07/10/nx-s1-5034796/russia-court-arrest-of-alexei-navalny-widow","urlToImage":"https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4000x2250+0+208/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Ff5%2Fd3%2Ff7604f4a412dbb010ef9652c75e3%2Fap24192071993826.jpg",
                                                                        "publishedAt":"2024-07-10T05:39:55Z",
                                                                        "content":"A court in Russia ordered the arrest of the widow of Russian opposition leader Alexei Navalny during a hearing Tuesday that was conducted in absentia as part of a sweeping Kremlin crackdown on the op… [+1895 chars]"
                                                                        },
                                                                        {
                                                                            "source":{"id":"usa-today","name":"USA Today"},"author":"Field Level Media",
                                                                            "title":"Rays' Wander Franco charged with sexual abuse, exploitation of minor: report - USA TODAY","description":"Tampa Bay Rays shortstop Wander Franco was formally charged with sexual abuse and sexual exploitation against a minor on Tuesday, according to ESPN.","url":"https://www.usatoday.com/story/sports/mlb/2024/07/10/wander-franco-charged-with-sexual-abuse-of-minor/74347908007/","urlToImage":"https://www.usatoday.com/gcdn/authoring/authoring-images/2024/01/20/USAT/72290163007-usatsi-20646010.jpg?crop=4757,2677,x0,y247&width=3200&height=1801&format=pjpg&auto=webp",
                                                                            "publishedAt":"2024-07-10T04:33:03Z",
                                                                            "content":"Tampa Bay Rays shortstop Wander Franco was formally charged with sexual abuse and sexual exploitation against a minor on Tuesday, according to ESPN.\r\nThe charges came in the Dominican Republic, where… [+1717 chars]"}]

    constructor(){
        super();   
        console.log("inside constructor from news component");
        this.state={
         articles:this.articles,
        loading:false        };
        }
  render() {
    return (
      <div className='container my-4'>
        <h2>NewsApp- Top Headline </h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className='col-md-4'>
          <NewsItem key={element.url}
          title={element.title} description={element.description}imageUrl="https://ktla.com/wp-content/uploads/sites/4/2024/07/violet.jpg?w=1280" newsUrl="work on it"/>
         </div>
       })}
          </div>
      </div>
    )
  }
}
export default News
