import React, { Component} from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
        "source": {
            "id": null,
            "name": "Daily Beast"
        },
        "author": "Nico Hines",
        "title": "Kanye Accidentally Exposes Elon Musk’s Hard-Right Grift in MAGA Meltdown - The Daily Beast",
        "description": "The rapper admits he’s jealous of how well the MAGA billionaire has used Nazi fakery to seize power in Donald Trump’s America.",
        "url": "https://www.thedailybeast.com/kanye-west-accidentally-exposes-elon-musks-hard-right-grift-in-maga-meltdown/",
        "urlToImage": "https://www.thedailybeast.com/resizer/v2/WZNLM242DJAYRD43YZ6Y37MLUI.jpg?smart=true&auth=93844aadcfdcef8cf89e15a2fc4c82bc9a7c09def66bacf3aae90477e412ae08&width=1200&height=630",
        "publishedAt": "2025-02-07T13:22:00Z",
        "content": null
    },
    {
        "source": {
            "id": "ars-technica",
            "name": "Ars Technica"
        },
        "author": "Andrew Cunningham",
        "title": "Report: iPhone SE could shed its 10-year-old design “as early as next week” - Ars Technica",
        "description": "New budget phone may include bigger screen, USB-C, Face ID, Apple Intelligence.",
        "url": "https://arstechnica.com/gadgets/2025/02/report-iphone-se-could-shed-its-10-year-old-design-as-early-as-next-week/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/09/Apple-iPhone-14-iPhone-14-Plus-5up-hero-220907-1152x648.jpg",
        "publishedAt": "2025-02-07T13:18:59Z",
        "content": null
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Sabrina Rodriguez, Maegan Vazquez, Brianna Tucker, María Luisa Paúl, Danielle Douglas-Gabriel, Meryl Kornfield, Patrick Svitek, Lauren Kaori Gurley, Aaron Blake, Anne Branigin, Herb Scribner, Sophia Nguyen, Kriston Capps, Missy Ryan, Katharine Houreld, John Hudson, Ann E. Marimow, Glenn Kessler, Michelle Ye Hee Lee, Shannon Osaka, Jake Spring, Tony Romm, Jacqueline Alemany",
        "title": "Live updates: Trump to meet with Japan’s prime minister, dine with Senate Republicans - The Washington Post",
        "description": "The latest news on President Donald Trump’s return to the White House and the new Congress.",
        "url": "https://www.washingtonpost.com/politics/2025/02/07/trump-presidency-news/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FLCF3TQWD6PHACNET4GQVRBP3I.JPG&w=1440",
        "publishedAt": "2025-02-07T13:14:42Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "SamMobile"
        },
        "author": "SamMobile, Mihai Matei",
        "title": "Galaxy S25 Ultra performs incredibly well in punishing drop tests - SamMobile - Samsung news",
        "description": "Shortly after Samsung announced the Galaxy S25 Ultra at Unpacked in San Francisco, the company issued a press release citing ...",
        "url": "https://www.sammobile.com/news/galaxy-s25-ultra-performs-incredibly-well-in-punishing-drop-tests/",
        "urlToImage": "https://www.sammobile.com/wp-content/uploads/2025/02/Galaxy-S25-Ultra-design-720x405.jpg",
        "publishedAt": "2025-02-07T13:08:00Z",
        "content": "Shortly after Samsung announced the Galaxy S25 Ultra at Unpacked in San Francisco, the company issued a press release citing a Corning laboratory test. The gist was that the new Gorilla Armor 2 solut… [+1740 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Ana Melgar, Sana Noor Haq",
        "title": "Two killed as small plane crashes into bus on busy road in Brazilian city of São Paulo - CNN",
        "description": "At least two people have been killed after a small airplane collided with cars on a busy avenue in",
        "url": "https://www.cnn.com/2025/02/07/americas/brazil-sao-paulo-plane-crash-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2025-02-07t120511z-340602161-rc2kpcazn6cs-rtrmadp-3-brazil-airplane-crash.JPG?c=16x9&q=w_800,c_fill",
        "publishedAt": "2025-02-07T12:58:00Z",
        "content": "At least two people were killed Friday after a small plane crashed onto a busy road and collided with a bus in São Paulo, southern Brazil, leaving charred aircraft parts strewn along the highway.\r\nTh… [+1127 chars]"
    },
    {
        "source": {
            "id": "abc-news",
            "name": "ABC News"
        },
        "author": "ABC News",
        "title": "Crews still searching for flight reported missing on Thursday in Alaska - ABC News",
        "description": null,
        "url": "https://abcnews.go.com/US/crews-searching-flight-reported-missing-alaska-10-people/story?id\\\\u003d118557849",
        "urlToImage": null,
        "publishedAt": "2025-02-07T12:28:36Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "MarketWatch"
        },
        "author": "Barbara Kollmeyer",
        "title": "Volatile markets or no, the best bet for the next decade is Wall Street stocks. - MarketWatch",
        "description": "Northern Trust strategist says buybacks are the secret American sauce",
        "url": "https://www.marketwatch.com/story/usa-all-the-way-why-one-firm-says-the-best-bet-for-the-next-decade-is-still-wall-street-2e9a32d3",
        "urlToImage": "https://images.mktw.net/im-75938386/social",
        "publishedAt": "2025-02-07T11:47:00Z",
        "content": "A lot of noise periodically gets made about diversifying outside of the U.S. BlackRocks Larry Fink, for example, recently suggested investors \r\nshould turn to Europe.But over the long haul, its USA a… [+237 chars]"
    },
    {
        "source": {
            "id": "espn",
            "name": "ESPN"
        },
        "author": "Jordan Raanan",
        "title": "Manning has had 'Hall of Fame moments, but not a Hall of Fame career' - ESPN",
        "description": "Although denied this time, Manning maintains a good chance to get in.",
        "url": "https://www.espn.com/nfl/story/_/id/43705843/why-eli-manning-did-not-make-cut-nfl-class-2025-hof",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0205%2Fr1447908_1296x729_16%2D9.jpg",
        "publishedAt": "2025-02-07T11:00:00Z",
        "content": "Eli Manning will have to wait to get into the Pro Football Hall of Fame for at least another year.\r\nThe legendary New York Giants quarterback didn't make the cut for the Class of 2025 in his first ye… [+5362 chars]"
    },
    {
        "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
        },
        "author": "Robert McMillan",
        "title": "Phishing Tests, the Bane of Work Life, Are Getting Meaner - The Wall Street Journal",
        "description": "Researchers say the ruses, aimed at teaching gullible employees about the dangers lurking online, don’t even work",
        "url": "https://www.wsj.com/tech/cybersecurity/phishing-tests-the-bane-of-work-life-are-getting-meaner-76f30173",
        "urlToImage": "https://images.wsj.net/im-32137863/social",
        "publishedAt": "2025-02-07T10:30:00Z",
        "content": "It was a Sunday morning in August, about a month before the start of classes, when Alicia Riley got the email about an Ebola outbreak at the University of California, Santa Cruz.\r\nOh, my God! thought… [+155 chars]"
    },
    {
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "author": null,
        "title": "China lashes out at US ‘coercion’ after Panama declines to renew infrastructure agreement - The Associated Press",
        "description": "China on lashed out at what it called U.S. “coercion” after Panama declined to renew a key infrastructure agreement with Beijing following Washington’s threat to take back the Panama Canal. The Belt and Road Initiative is President Xi Jinping’s signature fore…",
        "url": "https://apnews.com/article/china-us-panama-canal-belt-road-9452852d8e074902d3f2a75fa73f5060",
        "urlToImage": "https://dims.apnews.com/dims4/default/49d9f1d/2147483647/strip/true/crop/3333x1875+0+174/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ffc%2F9a%2Fb1ec5868a8a8e0d0372f6335d165%2F331d0f3fb35b40679a1dde5151563c86",
        "publishedAt": "2025-02-07T09:21:00Z",
        "content": "BEIJING (AP) China on Friday lashed out at what it called U.S. coercion after Panama declined to renew a key infrastructure agreement with Beijing following Washingtons threat to take back the Panama… [+1904 chars]"
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "Mike Bohn",
        "title": "UFC 312 video: Dricus Du Plessis, Sean Strickland intense at final staredown - MMA Junkie",
        "description": "Dricus Du Plessis and Sean Strickland came face-to-face for the final time before their UFC 312 title rematch.",
        "url": "https://mmajunkie.usatoday.com/2025/02/ufc-312-video-dricus-du-plessis-sean-strickland-intense-at-final-staredown",
        "urlToImage": "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2025/02/dricus-du-plessis-vs-sean-strickland-ufc-312-ceremonial-weigh-ins.jpg?w=1000&h=576&crop=1",
        "publishedAt": "2025-02-07T09:10:00Z",
        "content": "Dricus Du Plessis and Sean Strickland got a final look at each other before their title rematch at UFC 312 ceremonial weigh-ins.\r\nDu Plessis (22-2 MMA, 8-0 UFC) will put his middleweight title on the… [+721 chars]"
    },
    {
        "source": {
            "id": "axios",
            "name": "Axios"
        },
        "author": "Rebecca Falconer",
        "title": "Trump sued by workers' unions over \"unconstitutional and illegal\" move to dismantle USAID - Axios",
        "description": "The Trump administration's action has \"generated a global humanitarian crisis,\" lawsuit says.",
        "url": "https://www.axios.com/2025/02/07/usaid-trump-rubio-sued-cuts",
        "urlToImage": "https://images.axios.com/f1NB5nUBes49_mInn4ipcCyYjj0=/0x318:6000x3693/1366x768/2025/02/07/1738897573764.jpg",
        "publishedAt": "2025-02-07T03:54:50Z",
        "content": "The Trump administration is being sued over its move to dismantle the U.S. Agency for International Development (USAID), with unions representing workers in the lawsuit calling the action \"unconstitu… [+3661 chars]"
    },
    {
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "author": null,
        "title": "Buffalo Bills quarterback Josh Allen, fiancee Hailee Steinfeld walk red carpet at NFL Honors - The Associated Press",
        "description": "Buffalo Bills quarterback Josh Allen and his fiancee, actor Hailee Steinfeld, were all smiles as they posed for pictures and mingled with celebrities as they walked the red carpet at the NFL Honors. Allen and Steinfeld were first linked in the spring of 2023,…",
        "url": "https://apnews.com/article/hailee-steinfeld-josh-allen-super-bowl-2025-d14943d1b3bb4cb42272fffe8f9f890f",
        "urlToImage": "https://dims.apnews.com/dims4/default/2f77324/2147483647/strip/true/crop/5101x2869+0+266/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F74%2Fc1%2F99e5968dceea30810d5a0509f0f3%2Fd136533845d84ce18a0f8f20dd03d9ee",
        "publishedAt": "2025-02-07T03:51:00Z",
        "content": "NEW ORLEANS (AP) Buffalo Bills quarterback Josh Allen and his fiancee, actor Hailee Steinfeld, were all smiles as they posed for pictures and mingled with celebrities as they walked the red carpet be… [+1609 chars]"
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "James Powel",
        "title": "Industrial giant Honeywell announces split into 3 companies after investor pressure - USA TODAY",
        "description": "Honeywell, one of the last remaining American industrial giants, announced it will split into three companies Thursday after investor pressure.",
        "url": "https://www.usatoday.com/story/money/2025/02/06/honeywell-split-aerospace/78309856007/",
        "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/02/07/USAT/78311360007-20170721-t-030509-z-114647398-rc-162-c-539780-rtrmadp-3-honeywellresults.JPG?crop=4181,2352,x0,y437&width=3200&height=1801&format=pjpg&auto=webp",
        "publishedAt": "2025-02-07T03:20:54Z",
        "content": "Aerospace titan Honeywell announced Thursday that it will split into three independent and publicly traded companies.\r\nThe company said that it will create Honeywell Automation and Honeywell Aerospac… [+2323 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Deadline"
        },
        "author": "Glenn Garner",
        "title": "Karla Sofía Gascón Responds To ‘Emilia Pérez’ Director & Offers “Silence” During Oscars Race: “Let The Work Talk For Itself” - Deadline",
        "description": "As Karla Sofía Gascón faces continued backlash for past comments, the 'Emilia Pérez' actress is stepping back from the spotlight.",
        "url": "http://deadline.com/2025/02/karla-sofia-gascon-responds-emilia-perez-director-offers-silence-oscars-race-1236281066/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2025/01/EMILIA-PEREZ-Karla-Sofia-Gascon.jpg?w=1024",
        "publishedAt": "2025-02-07T02:30:00Z",
        "content": "As Karla Sofía Gascón faces continued backlash for past comments, the Emilia Pérez actress is stepping back from the spotlight.\r\nThe first-time Oscar nominee recently responded to writer-director Jac… [+1721 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "GovExec.com"
        },
        "author": null,
        "title": "Russ Vought, champion of Schedule F and slashing agency budgets, wins confirmation to OMB - Government Executive",
        "description": null,
        "url": "https://www.govexec.com/management/2025/02/russ-vought-champion-schedule-f-and-slashing-agency-budgets-wins-confirmation-omb/402823/",
        "urlToImage": null,
        "publishedAt": "2025-02-07T00:42:00Z",
        "content": "\\nThe Senate on Thursday confirmed Russ Vought to serve as Office of Management and Budget director, sending back to the White House a veteran of the role who has garnered controversy for his adversa… [+4927 chars]"
    }
  ]
  constructor(){
    super();
    console.log('hello Im a constructor from news Component');
    this.state = {
      articles : this.articles,
      loading : false
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=cars&from=2025-01-08&sortBy=publishedAt&apiKey=3e412c4ad26c4669a7bee706d094d0a8";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles});
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">

            {this.state.articles.map((element) =>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem 
                  title={element.title ? element.title : ''} 
                  description={element.description ? element.description : ''} 
                  imageUrl={element.urlToImage} 
                  url={element.url} 
                />
              </div>
            })}
            
        </div>
      </div>
    )

  }
}

export default News
