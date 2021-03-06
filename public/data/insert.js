var mongojs = require("mongojs");
var db = mongojs('news', ['news']);

var new_list = [
	{
		"id": 0,
		"title": "Putin’s Surprise Syria Move Keeps Everyone Guessing", 
		"author": "NEIL MacFARQUHAR",
		"abstract": "President Vladimir V. Putin’s typically theatrical order to withdraw the bulk of Russian forces from Syria seemingly caught Washington, Damascus and everybody in between off guard.",
		"like": 10,
		"dislike": 0,
		"time": "2016-03-15T00:00:00-05:00",
		"img": "img/Putin.jpg",
		"topic": ["Politics"],
		"content": "MOSCOW — President Vladimir V. Putin‘s typically theatrical order to withdraw the bulk of Russian forces from Syria, a process that the Defense Ministry said it began on Tuesday, seemingly caught Washington, Damascus and everybody in between off guard — just the way the Russian leader likes it. \n \nBy all accounts, Mr. Putin delights at creating surprises, reinforcing Russia’s newfound image as a sovereign, global heavyweight and keeping him at the center of world events. \n \nIn the case of Syria, the sudden, partial withdrawal more than five months after an equally surprising intervention allows Mr. Putin to claim a list of achievements without a significant cost to Russia in blood or rubles. \n\nIf the roughly 4,000 Russian troops centered on a contingent of about 50 combat aircraft had remained in Syria, Mr. Putin risked becoming just another proxy force fighting for the Syrian president, Bashar al-Assad. But Mr. Putin wanted to make his mark by forging a solution in Syria, rather than lingering long enough to validate President Obama’s contention that Moscow had jumped headfirst into a quagmire."
	},

	{
		"id": 1,
		"title": "Allies Say Obama’s Court Pick Will Be Hard to Ignore", 
		"author": " JULIE HIRSCHFELD DAVIS",
		"abstract": "President Obama’s decision is based purely on qualifications, White House officials insisted, though other allies cited political considerations.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-14T00:00:00-05:00",
		"img": "img/obama.jpeg",
		"topic": ["Politics"],
		"content": "WASHINGTON — President Obama is close to a decision on a Supreme Court nominee based purely on qualifications and experience, White House officials insisted on Monday, but the president’s allies said that political considerations — including whether a nominee had an easily defensible record or appeal to Republicans — were clearly part of Mr. Obama’s calculus.\n\nSpeculation now centers on three potential nominees, all federal circuit court judges: Sri Srinivasan, 49, who was confirmed in 2013 with a 97-to-0 vote; Merrick B. Garland, 63, a moderate who has been a finalist in Mr. Obama’s previous Supreme Court searches; and Paul J. Watford, 48, a judge on the Ninth Circuit Court of Appeals in California.\n\nIn an afternoon conference call on Monday, Mr. Obama’s political director, David Simas, and three former senior White House officials told activists, donors, elected officials and legal experts they were ready with an elaborate campaign plan after Mr. Obama names his choice. The president’s decision is expected this week and could come as early as Tuesday.\n\nArmed with public polling data, Mr. Simas said on the call that the Republicans’ refusal to consider the president’s nominee was “untenable” and was opposed by two-thirds of the public. He said the White House message would be far more effective once Mr. Obama had chosen a nominee with “impeccable credentials,” according to people who dialed in, who insisted on anonymity to discuss the details of a confidential call.\n\nMr. Obama himself appeared to concede on Monday that he was seeking a nominee Republicans would have trouble rejecting. In an interview with CNN, he said that he would choose a person “who should be a consensus candidate” to succeed Justice Antonin Scalia, the leader of the court’s conservative wing who died last month."
	},

	{	
		"id": 2,
		"title": "Bernie Sanders: 'I think we know who ISIS is'", 
		"author": " Eric Bradner, CNN",
		"abstract": "Vermont Sen. Bernie Sanders says the United States needs to toughen its surveillance to stop Brussels-style ISIS attacks, adding that 'we know who ISIS is.'",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-27T12:47:00-05:00",
		"img": "img/sanders.jpeg",
		"topic": ["Politics"],
		"content": "Washington (CNN)Vermont Sen. Bernie Sanders says the United States needs to toughen its surveillance to stop Brussels-style ISIS attacks, adding that \"we know who ISIS is. \"\n\n\"It goes without saying that when you have attacks that take place, when 30 people get killed in Brussels, something went wrong ... We have got to improve our efforts to make sure it does not happen again,\" he told CNN's Jake Tapper on \"State of the Union\" Sunday when pressed for specifics.\n\nSanders credited President Barack Obama for his handling of the fight against ISIS, saying that the terrorist organization is \"on the defensive. They are retreating.\"\n\nSanders also made a claim that seems at odds with intelligence agencies' concerns about ISIS-inspired attacks in Western countries.\n\n\"I think we know who ISIS is. We know those people who are planning attacks against our European allies and against ourselves,\" he said.\n\nSanders' comments come after he swept three Western Democratic presidential caucuses on Saturday, defeating Hillary Clinton in Washington, Alaska and Hawaii.\n\nOf his campaign, which lags behind Clinton in the delegate count in large part because Clinton has been endorsed by many more so-called \"superdelegates,\" Sanders said that \"we think we do have a path to victory.\""
	},

	{	
		"id": 3,
		"title": "Can Trump get to 1,237 delegates?", 
		"author": "By Stephen Collinson and Eric Bradner",
		"abstract": "Ted Cruz and John Kasich will need a political earthquake to slow Donald Trump.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-25T00:00:00-05:00",
		"img": "img/Trump.jpeg",
		"topic": ["Politics"],
		"content": "(CNN)Ted Cruz and John Kasich will need a political earthquake to slow Donald Trump. \n\nTo stop the billionaire from hitting, or coming very close to, the magic number of 1,237 delegates needed to seal the Republican nomination and to raise the prospect of a contested convention, they must do more than simply start snapping up victories in the remaining nominating contests: They must fundamentally reshape the political map. \n\nCruz, the Texas senator seen as extreme by many mainstream voters, would suddenly have to start appealing to moderates. And Kasich, the Ohio governor branded a RINO (Republican in Name Only) by many grass-roots activists must suddenly find an invisible connection to conservatives.\n\nAnd even if that worked, both men would have to start winning big in precincts and entire states that look nothing like those where they have had success so far."
	},

	{
		"id": 4,	
		"title": "Donald Trump's history of controversy with women", 
		"author": "By Nia-Malika Henderson",
		"abstract": "Tweet by tweet, Donald Trump could undermine the GOP's efforts to close the gender gap, a strategy that is critical to the party's hopes of retaking the White House in November.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-27T18:46:00-05:00",
		"img": "img/Trump1.jpeg",
		"topic": ["Politics"],
		"content": "(CNN)Tweet by tweet, Donald Trump could undermine the GOP's efforts to close the gender gap, a strategy that is critical to the party's hopes of retaking the White House in November. \n\nMiffed that an anti-Trump super PAC targeted his wife by using a racy photo of her, Trump has gone after Ted Cruz's wife, upending the conventional rules of what's acceptable in presidential politics.\n\nHe posted on Twitter Tuesday that he would \"spill the beans\" on Heidi Cruz, a former Goldman Sachs executive."
	},

	{	
		"id": 5,
		"title": "Sanders sweeps in Alaska, Hawaii, Washington, but too little too late?", 
		"author": "FoxNews.com",
		"abstract": "Sen. Bernie Sanders won nearly three dozen delegates more than Hillary Clinton Saturday in sweeping the Alaska, Washington and Hawaii Democratic presidential caucuses, but the strong, comeback victories failed to cut substantially into the front-runner's big lead.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-28T00:00:00-05:00",
		"img": "img/Sanders1.jpeg",
		"topic": ["Politics"],
		"content": "Sen. Bernie Sanders won nearly three dozen delegates more than Hillary Clinton Saturday in sweeping the Alaska, Washington and Hawaii Democratic presidential caucuses, but the strong, comeback victories failed to cut substantially into the front-runner's big lead.\n\nSanders needs to win 67 percent of the remaining delegates and uncommitted super-delegates through June to clinch the Democratic nomination. And so far he's winning only 37 percent.\n\nThere were 162 delegates at stake Saturday -- Washington with 101, followed by Hawaii with 25 and Alaska with 16.\n\nThe Vermont senator won 55 delegates, compared to 20 for Clinton. However, more will likely be allocated to Sanders in several weeks, when the Washington state Democratic Party releases vote shares by district.\n\nStill, Clinton still maintains a wide advantage in delegates, winning 1,243 to Sanders' 975 based on primary and caucuses to date.\n\nHer lead is even bigger when including super-delegates, or party officials who can back any candidate they wish. Clinton has 1,712 to Sanders' 1,004, with 2,383 needed to win."
	},

	{	
		"id": 6,
		"title": "Why Hillary Clinton would make a good president — and maybe even a great one", 
		"author": "Ryu Spaeth",
		"abstract": "When Barack Obama took office in January of 2009, there was no end to the problems that needed fixing. Some 30 million Americans did not have health insurance. ",
		"like": 1,
		"dislike": 0,
		"time": "2015-04-13T00:00:00-05:00",
		"img": "img/Hillary.jpeg",
		"topic": ["Politics"],
		"content": "When Barack Obama took office in January of 2009, there was no end to the problems that needed fixing. Some 30 million Americans did not have health insurance. Hundreds of thousands of people had lost their jobs the previous year, and millions more would join them in subsequent months. The financial industry was broken but, like some ticking time bomb on pause, still posed a serious threat to the global economy. Two of the nation's largest automakers were heading toward bankruptcy. And the country was drained and chastened by its greatest foreign policy disaster since Vietnam.\n\nThe catastrophe of the Bush presidency was so deep and wide that it sometimes seemed that Obama would never claw out of its shadow. He also frequently hurt his own cause, in particular by clinging to his image as a bridge-building uniter even when it was clear that the minority party was actively using his bipartisan overtures to slow and defeat his agenda.\n\nBut as we enter the twilight of the Obama era, he can boast numerous achievements: an economy slowly but surely approaching full employment; a landmark health care law that has produced clear results for millions of people; a financial regulatory regime that, while watered down, is starting to shrink Wall Street; and a patchwork of environmental regulations and bilateral climate change agreements that could finally put the U.S., and possibly the world, in a position to address global warming.\n\nIn contrast, Hillary Clinton, who officially announced her campaign for president on Sunday, will not face the same array of challenges should she be elected — which is another way of saying that she will have fewer opportunities to remake the political landscape in her image. Her candidacy is not a campaign for change, but a call for going onwards and upwards. Though her team would be loath to admit it, she is essentially running for Barack Obama's third term.\n\nBut there is still plenty for Clinton and the Democratic Party to do — and plenty of space to leave her mark.\n\nMORE PERSPECTIVES\n\nJAMES POULOS\n\nWhat would it take to keep the West safe from terrorism?\n\nMICHAEL BRENDAN DOUGHERTY\n\nObama's Middle East disasters\n\nFirst, simply by virtue of being elected, Clinton could consolidate the gains that Democrats have made in the Obama era. Her liberal detractors like to say that she is virtually indistinguishable from likely Republican opponent Jeb Bush, but that misses the fact that a President Bush would be under enormous pressure to roll back Obama's hard-won reforms in the areas of health care, financial regulation, and the environment. At the very least, Clinton would face pressure from her party and her base to protect those reforms. Her veto power alone could entrench progressive priorities for a minimum of four years, which would be crucial in making them intractable elements of the American polity. That alone would make her a good president."
	},

	{	
		"id": 7,
		"title": "Cruz blames Trump and his 'henchmen' for tabloid story", 
		"author": "Jeremy Diamond, CNN",
		"abstract": "Ted Cruz is accusing Donald Trump and his 'henchmen' of smearing him with a salacious tabloid story, which the Texas senator called 'garbage' and 'complete and utter lies.'",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-25T17:21:00-05:00",
		"img": "img/Cruze.jpeg",
		"topic": ["Politics"],
		"content": "(CNN)Ted Cruz is accusing Donald Trump and his \"henchmen\" of smearing him with a salacious tabloid story, which the Texas senator called \"garbage\" and \"complete and utter lies.\"\n\n \"Let me be clear, this National Enquirer story is garbage. It is complete and utter lies. It is a tabloid smear, and it is a smear from Donald Trump and his henchmen,\" Cruz said Friday, adding that he believes Trump \"directed these attacks.\"\n\nCNN has no reporting to suggest that the tabloid allegations are true or that Trump or any of his advisers are behind the story, which was published this week.\n\nTrump, in a statement released by his campaign manager Corey Lewandowski, said he had no involvement with the story."
	},

	{	
		"id": 8,
		"title": "Cruz on Trump's attacks on his wife: 'Leave Heidi the hell alone'", 
		"author": "Theodore Schleifer, CNN",
		"abstract": "An angry and emotional Ted Cruz on Thursday ripped into Donald Trump for his attacks on Cruz's wife, Heidi, and repeatedly declined to say whether he would support Trump if he's the Republican presidential nominee.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-25T11:39:00-05:00",
		"img": "img/Cruze1.jpeg",
		"topic": ["Politics"],
		"content": "Washington (CNN)An angry and emotional Ted Cruz on Thursday ripped into Donald Trump for his attacks on Cruz's wife, Heidi, and repeatedly declined to say whether he would support Trump if he's the Republican presidential nominee.\n\n\"Donald, you're a sniveling coward and leave Heidi the hell alone,\" Cruz told reporters after a factory tour in Dane, Wisconsin, pointing his finger at the cameras for emphasis.\n\nAsked then multiple times if he could still support Trump in November as the Republican nominee given his most recent comments, a fired-up Cruz paused for a few beats before not directly answering whether he would.\n\n\"I'm going to beat Donald for the nomination,\" Cruz responded, before saying three times: \"Donald Trump will not be the nominee.\"\n\nEven as tensions escalated between the two, Cruz has insisted that he would back Trump if he won the nomination because he pledged he would do so at the outset of the Republican race. Cruz spent much of the campaign praising Trump, at one point calling him \"fantastic.\""
	},

	{	
		"id": 9,
		"title": "Ted Cruz Pulls Off Wins in Texas and Oklahoma", 
		"author": " Russ Choma",
		"abstract": "Ted Cruz defied Donald Trump's rolling victory party, pulling off a win in his home state of Texas, networks are projecting now. The win was not totally unexpected, but it was crucial for Cruz, who desperately needed a victory in a Southern state. Cruz still trails Trump badly in the delegate count, but at least he was able to show that he could hold his own state against the Trump juggernaut.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-01T00:00:00-05:00",
		"img": "img/Cruze2.jpeg",
		"topic": ["Politics"],
		"content": "Ted Cruz defied Donald Trump's rolling victory party, pulling off a win in his home state of Texas, networks are projecting now. The win was not totally unexpected, but it was crucial for Cruz, who desperately needed a victory in a Southern state. Cruz still trails Trump badly in the delegate count, but at least he was able to show that he could hold his own state against the Trump juggernaut. \n\n The big question may be how well Trump and Rubio do. A candidate must win at least 20 percent of the vote to qualify for any chunk of the Lone Star State's 155 delegates—the big prize of Super Tuesday. Trump will almost certainly make that threshold, but at the moment Rubio is hovering just below 20 percent, meaning that Cruz and Trump could share all the delegates."
	},

	{	
		"id": 10,
		"title": "Donald Trump relishes his Super Tuesday wins: ‘I’m a unifier’", 
		"author": "Greg Bluestein",
		"abstract": "Republican Donald Trump and Democrat Hillary Clinton swept to victory Tuesday in Georgia’s primaries, in a show of strength over rivals who are competing to stave off their nominations. Read more about Trump’s victory here. Read more about Clinton’s victory here.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-01T00:00:00-05:00",
		"img": "img/Trump3.jpeg",
		"topic": ["Politics"],
		"content": "Republican Donald Trump and Democrat Hillary Clinton swept to victory Tuesday in Georgia’s primaries, in a show of strength over rivals who are competing to stave off their nominations. Read more about Trump’s victory here. Read more about Clinton’s victory here.\n\nUpdated at 9:55 p.m.: Donald Trump hit back at Hillary Clinton in his Super Tuesday victory speech, urged Marco Rubio to drop out of the race and cast himself as the only Republican who could unify the fractured party.\n\n“I’m a unifier. I know people are going to find that a little hard to believe. Once we get all of that finished, we’re going to go after one person: And that’s Hillary Clinton,” he said. “And, frankly, I think that’s an easy race.” \n\nTrump called Rubio, who is likely to go winless in the Super Tuesday states, a “lightweight” and said it was a two-way race between him and Texas Sen. Ted Cruz, who won his home state and neighboring Oklahoma. \n\n“I’ve always liked Marco until about a week ago when he decided to go hostile. He decided to go Don Rickles. But Don Rickles has a lot more talent,” he said, adding: “It’s hurt him … He had a bad night. At least you can say that Ted has won something. You got to be able to win. He’s all talk.”"
	},

	{	
		"id": 11,
		"title": "Hillary Clinton: 'Tomorrow, this campaign goes national'", 
		"author": "Stephen Collinson, CNN",
		"abstract": "Hillary Clinton finally got her landslide -- and it could redefine the Democratic race for the White House.",
		"like": 1,
		"dislike": 0,
		"time": "2016-02-27T00:00:00-05:00",
		"img": "img/Hillary2.jpeg",
		"topic": ["Politics"],
		"content": "(CNN)Hillary Clinton finally got her landslide -- and it could redefine the Democratic race for the White House. \n\nHer crushing defeat of Sen. Bernie Sanders in the South Carolina primary Saturday restored Clinton as the undisputed front-runner, as her southern firewall of minority voters held rock solid and her opponent fared poorly among African-American voters. \n\n2016 Candidate Matchmaker. The former secretary of state, after a narrow win in Iowa, a major loss in New Hampshire and a five-point victory in Nevada, has now captured three of the first four Democratic nominating contests. She's now primed for Super Tuesday, an 11-state Democratic matchup that includes a sweep of Clinton-friendly country in the Deep South. \n\n\"Tomorrow, this campaign goes national,\" Clinton said, in a speech dominated by her new campaign mantra of breaking down racial, gender and economic barriers, which has been distilled from the experience of tough months on the campaign trail and the stronger-than-expected populist challenge from Sanders."
	},


	{	
		"id": 12,
		"title": "Ivanka Trump Gives Birth To Son Theodore James", 
		"author": "People",
		"abstract": "Ivanka Trump has started down a new trail: Being a mom of three!",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-28T00:00:00-05:00",
		"img": "img/Trump4.jpeg",
		"topic": ["Politics"],
		"content": "he announced his arrival via Twitter.\n\nIvanka Trump has started down a new trail: Being a mom of three! \n\nThe businesswoman welcomed her third child, a boy, with husband Jared Kushner on Sunday, March 27, she announced on Twitter. \n\nSon Theodore James Kushner joins big brother Joseph Frederick, 2, and sister Arabella Rose. \n\n “Jared and I feel incredibly blessed to announce the arrival of Theodore James Kushner,” she wrote, sharing a photo hours later on her Facebook page. “Baby Theodore. My heart is full. xx, Ivanka #grateful”"
	},

	{	
		"id": 13,
		"title": "'Batman v Superman' ushers in summer movie season", 
		"author": " Todd Leopold, CNN",
		"abstract": "Batman v Superman: Dawn of Justice, which opens Friday, has all the hallmarks of a summer blockbuster. Comic book superheroes? Check. Overpowering CGI? Check. A monstrous budget -- estimated at $250 million -- that will require 'Avengers'- and 'Star Wars' -like box office grosses to avoid the taint of megabomb?",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-24T00:00:00-05:00",
		"img": "img/superman.jpeg",
		"topic": ["Entertainment"],
		"content": "(CNN)According to the calendar, it's barely even spring. \n\nBut according to Hollywood's calendar, summer movie season has started.\"Batman v Superman: Dawn of Justice,\" which opens Friday, has all the hallmarks of a summer blockbuster. Comic book superheroes? Check. Overpowering CGI? Check. A monstrous budget -- estimated at $250 million -- that will require \"Avengers\"- and \"Star Wars\"-like box office grosses to avoid the taint of megabomb? \n\nBatman v Superman: Who are fans rooting for? \n\nYou bet. (Or Warner Bros. is betting, anyway. The studio is a unit of Time Warner, as is CNN. \n\nFollowing \"Batman v Superman,\" the big releases come fast and furious right through Memorial Day, the traditional beginning of the summer season. And no wonder: Last year, \"Furious 7,\" the latest in the \"Fast and Furious\" series, opened the first weekend in April. There's no need to wait for May to release a blockbuster. \n\nWith that in mind, here are five films we're looking forward to, both before and after summer really begins:"
	},


	{	
		"id": 14,
		"title": "Rolling Stones make history with free concert in Cuba", 
		"author": "Patrick Oppmann, CNN",
		"abstract": "On Friday, the Rolling Stones became the first major international rock band to play in Cuba, drawing hundreds of thousands of people to a free concert at a decrepit sports complex on the road to the airport.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-27T13:10:00-05:00",
		"img": "img/cuba.jpeg",
		"topic": ["Entertainment"],
		"content": "For years, following the Cuban revolution, rock music was banned on Cuban state TV and radio. Cubans who wore long hair and beards faced harassment from officials, including Fidel Castro who told them to dress like men.\n\nNo more. \n\n\"Years ago it was difficult to hear our music but here we are,\" Rolling Stones frontman Mick Jagger told the crowd in Spanish. \"The times are changing.\"\n\n\"Havana, Cuba and the Rolling Stones: it's amazing,\" added legendary Stones guitarist Keith Richards.\n\nThe concert was the result of months of rock 'n' roll diplomacy conducted after the United States and Cuba announced in 2014 that they would repair decades of broken relations.\n\n\"It feels historic,\" Jagger said after arriving to Cuba.\n\nAs most Cubans only earn a paltry $20 a month, there was no charge to see the show."
	},


	{	
		"id": 15,
		"title": "Oscar shines on 'Spotlight'", 
		"author": "Todd Leopold, CNN",
		"abstract": "'Spotlight' is basking in the golden glow of Oscar. 'Mad Max: Fury Road' may have won more honors at the 88th Academy Awards, leading all films with six. 'The Revenant' won some major prizes, including the first Oscar for actor Leonardo DiCaprio.",
		"like": 1,
		"dislike": 0,
		"time": "2016-02-29T12:29:00-05:00",
		"img": "img/oscar.jpeg",
		"topic": ["Entertainment"],
		"content": "(CNN)\"Spotlight\" is basking in the golden glow of Oscar. \n\n\"Mad Max: Fury Road\" may have won more honors at the 88th Academy Awards, leading all films with six. \"The Revenant\" won some major prizes, including the first Oscar for actor Leonardo DiCaprio. \n\nBut when the last award of the evening was read, it was the little film about Boston Globe investigative reporters digging into a sex abuse scandal involving Catholic priests that was left standing. \n\nComplete list of winners \n\n\"This film gave a voice to survivors,\" producer Michael Sugar said. \"And this film amplifies that voice, which we hope will become a choir that will resonate all the way to the Vatican.\""
	},

	{	
		"id": 16,
		"title": "‘Zootopia’ Nears $700M Global; ‘The Revenant’ Crosses $500M Globally – International Box Office Final'", 
		"author": "Nancy Tartaglione",
		"abstract": "4th UPDATE, WRITETHRU Monday 3:58 PM: Warner Bros’ Batman V Superman: Dawn Of Justice defied the critics and had a massive $254M international opening this weekend, making it the No. 5 biggest bow ever at overseas turnstiles, and the No. 4 globally with $424.1M. ",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-28T15:38:00-05:00",
		"img": "img/zootopia.jpeg",
		"topic": ["Entertainment"],
		"content": "4th UPDATE, WRITETHRU Monday 3:58 PM: Warner Bros’ Batman V Superman: Dawn Of Justice defied the critics and had a massive $254M international opening this weekend, making it the No. 5 biggest bow ever at overseas turnstiles, and the No. 4 globally with $424.1M. There’s more detail on the WB/DC phenom below, and even more in my separate report here. Despite their worldwide domination, the black- and red-caped superheroes (and Wonder Woman) weren’t the only game in town internationally. Zootopia has Disney doing the bunny hop as the global charmer stuffed another big $44.7M (up from the Sunday estimate of $42.5M) worth of eggs into its Easter basket this weekend. That pushed it past $455M internationally, including $201M in China, and brought the global cume to $697.2M. On Friday, it helped speed the Walt Disney Studios past $1B at the international box office, the fastest the studio has ever reached the milestone."
	},

	{	
		"id": 17,
		"title": "‘Game Of Thrones’ March Madness Teaser: “We Deserve Death — We All Do”", 
		"author": " Ross A. Lincoln",
		"abstract": "4th UPDATE, WRITETHRU Monday 3:58 PM: Warner Bros’ Batman V Superman: Dawn Of Justice defied the critics and had a massive $254M international opening this weekend, making it the No. 5 biggest bow ever at overseas turnstiles, and the No. 4 globally with $424.1M. ",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-26T16:24:00-05:00",
		"img": "img/gameofthrone.jpeg",
		"topic": ["Entertainment"],
		"content": "As is traditional, we’ll get it out of the way first: nope, there’s nothing whatsoever about Jon Snow in the new Game of Thrones teaser released earlier this afternoon. We’re all going to have to wait another month for the show’s 6th season premiere to find out whether or not the seemingly murdered Lord Commander of the Night’s Watch is, in fact, for real murdered. Sorry about that. On the other hand, what the teaser does offer is a moody, tense look at some of what will be seen when the show returns, including the return of Bran Stark, who hasn’t been seen since season 4. Watch it below now."
	},

	{
		"id": 18,	
		"title": "Clippers' Blake Griffin starts serving four-game suspension", 
		"author": "Andrew Han ESPN Writer",
		"abstract": "LOS ANGELES -- Los Angeles Clippers forward Blake Griffin is medically cleared for all basketball activities and started serving his four-game suspension with Sunday's 105-90 win against the Denver Nuggets.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-27T00:00:00-05:00",
		"img": "img/griffin.jpeg",
		"topic": ["Sports"],
		"content": "LOS ANGELES -- Los Angeles Clippers forward Blake Griffin is medically cleared for all basketball activities and started serving his four-game suspension with Sunday's 105-90 win against the Denver Nuggets. \n\nHe will return April 3 against the Washington Wizards, the team said. \n\nGriffin was suspended for four games by the team and also docked five games' pay of $859,442 for an altercation at a Toronto restaurant on Jan. 23. He suffered a broken right hand during the incident after punching an assistant equipment manager. \n\nGriffin was cleared for contact on Saturday and went through his first workout since partially tearing his left quadriceps tendon on Christmas Day against the Los Angeles Lakers. Entering Sunday, he had missed the last 41 games due to the quad injury and the broken hand. \n\n\"We went through some offensive stuff [Saturday] and everything's a lot smoother when Blake's on the court,\" Clippers point guard Chris Paul said Sunday. \"Just our continuity and the way our offense looks. And it just gives our team an ultimate confidence. But at the same time, we understand he has to work his way back in.\""
	},

	{
		"id": 19,	
		"title": "Healthy Stanton-Fernandez duo can help Marlins make a big splash", 
		"author": "Jerry Crasnick ESPN Senior Writer",
		"abstract": "JUPITER, Fla. -- Two elite players on a single MLB roster can do only so much to push a team over the top. If Zack Greinke and Paul Goldschmidt could pitch and slug the Arizona Diamondbacks to success the same way John Stockton and Karl Malone pick-and-rolled their way to the Hall of Fame with the NBA's Utah Jazz, season-ticket holders in Phoenix could already feel free to book hot tub reservations at Chase Field in October.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-27T00:00:00-05:00",
		"img": "img/stone.jpeg",
		"topic": ["Sports"],
		"content": "JUPITER, Fla. -- Two elite players on a single MLB roster can do only so much to push a team over the top. If Zack Greinke and Paul Goldschmidt could pitch and slug the Arizona Diamondbacks to success the same way John Stockton and Karl Malone pick-and-rolled their way to the Hall of Fame with the NBA's Utah Jazz, season-ticket holders in Phoenix could already feel free to book hot tub reservations at Chase Field in October. \n\nThat said, any team with a bona fide basher in the middle of the order and a true No. 1 starter has a legitimate head start toward a postseason share. \n\nMost teams with a great hitter-pitcher tandem are destined to generate some buzz in the spring. On current MLB rosters, Washington's Bryce Harper and Max Scherzer, San Francisco's Madison Bumgarner and Buster Posey, Pittsburgh's Andrew McCutchen and Gerrit Cole, the Chicago Cubs' Jake Arrieta and Anthony Rizzo, the White Sox's Chris Sale and Jose Abreu, Seattle's Robinson Cano and Felix Hernandez, and Arizona's Goldschmidt-Greinke duo are prominent pairs that spring to mind. And if Justin Verlander can come close to regaining his Cy Young-MVP form of 2011, he and Miguel Cabrera will go a long way toward making the Detroit Tigers a major threat in the American League Central."
	},

	{	
		"id": 20,
		"title": "Buddy system: Oregon can't solve Hield puzzle", 
		"author": "JMyron Medcalf ESPN Staff Writer",
		"abstract": "ANAHEIM, Calif. -- Just before Buddy Hield collected one of the first of his eight 3-pointers in his 37-point explosion during Oklahoma’s 80-68 victory over Oregon in the Elite Eight at the Honda Center on Saturday night, a Ducks fan in the front row screamed lies.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-26T00:00:00-05:00",
		"img": "img/oregon.jpeg",
		"topic": ["Sports"],
		"content": "ANAHEIM, Calif. -- Just before Buddy Hield collected one of the first of his eight 3-pointers in his 37-point explosion during Oklahoma’s 80-68 victory over Oregon in the Elite Eight at the Honda Center on Saturday night, a Ducks fan in the front row screamed lies. \n\n“Buddy, you stink!” \n\nMoments after that nonsense, Hield caught the rock on the left wing, just a few feet from that Oregon fan’s seat. \n\nElgin Cook hurled his 6-foot-6 frame to that spot to contest the shot -- hand extended and fingers spread. Hield would have to shoot over a broomstick to hit the deep 3-pointer."
	},

	{	
		"id": 21,
		"title": "Cubs game delayed when Jason Heyward swarmed, stung by bees", 
		"author": "ESPN.com news services",
		"abstract": "Chicago Cubs center fielder Jason Heyward was surrounded by a swarm of bees and stung multiple times during the top of the third inning at Sloan Park in Mesa, Arizona, halting the game with the Seattle Mariners for more than five minutes.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-15T00:00:00-05:00",
		"img": "img/cubs.jpg",
		"topic": ["Sports"],
		"content": "Chicago Cubs center fielder Jason Heyward was surrounded by a swarm of bees and stung multiple times during the top of the third inning at Sloan Park in Mesa, Arizona, halting the game with the Seattle Mariners for more than five minutes. \n\nHeyward kept waving his glove, tried walking to different parts of the outfield, and even climbed the center-field fence trying to elude the pests. He said after the game that he was stung at least 10 times on his face and neck, but fortunately is not allergic. \n\n\"It started on my face then the back of my head over here,\" Heyward said. \"It's OK. I'm not allergic.\""
	},


	{	
		"id": 22,
		"title": "Kane and Aduriz shine on international break; kit suppliers should be ashamed", 
		"author": "IAIN MACINTOSH",
		"abstract": "Iain Macintosh determines who deserves praise and punishment in the first week of the international break in this edition of Heroes and Villains.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-28T00:00:00-05:00",
		"img": "img/kane.png",
		"topic": ["Sports"],
		"content": "A fine goal for Harry Kane and a very appropriate one too, given the way that his turn evoked memories of a certain Johan Cruyff. Kane worked hard all night for England, doing all of the dirty jobs like holding up the ball and dragging markers out of position. He is intelligent, tireless and powerful. He links up superbly with his teammates, the outstanding Dele Alli, in particular. So if Kane ends up on the bench this summer because Wayne Rooney is fit again, you'd be well advised to step away from your laptop because English Twitter will melt the screen with its fury. \n\nBut while England fans might hope that their veteran striker stays on the sidelines, Germany's Mario Gomez might just be working his way back into contention. The 30-year-old target man is back in the squad after an outstanding season in Turkey with Besiktas and he nodded home his first international goal since Euro 2012. Given Joachim Low's enduring disregard for Stefan Kiessling (not to mention Kiessling's poorest goal tally in more than a decade), that might be enough to earn Gomez a ticket to Euro 2016. \n\nA new formation for Italy and a very positive performance as well. The Azzurri drew 1-1 with Spain on Friday and it was a good night's work for outgoing manager Antonio Conte. Not least because Chelsea eyes were upon him throughout. Conte is widely expected to sign a three-year deal with the Blues this summer and the sight of Chelsea's player-liaison officer Gary Staker, deep in conversation with Conte's brother Daniele, who acts as his agent, will have done nothing to quell those rumours. Italy gave Spain a real test and Conte is confident he can sign off with a flourish. Roman Abramovich will approve."
	},

	{	
		"id": 23,
		"title": "Sources: Badgers to name Tony Granato men's hockey coach", 
		"author": "ESPN.com",
		"abstract": "Wisconsin will name Detroit Red Wings assistant Tony Granato as its new head hockey coach, multiple sources tell ESPN's John Buccigross.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-30T00:00:00-05:00",
		"img": "img/tony.jpeg",
		"topic": ["Sports"],
		"content": "The Wisconsin Badgers have hired Detroit Red Wings assistant Tony Granato to a five-year contract as their new hockey coach, the school announced Wednesday. \n\nGranato is replacing Mike Eaves, who was fired earlier this month after 14 seasons at the helm of the Badgers program.\n\nGranato, 51, played at Wisconsin from 1983 to '87 and went on to a 13-season career in the NHL with the New York Rangers, Los Angeles Kings and San Jose Sharks. He scored 248 goals in 775 career games.\n\nThe Red Wings said Sunday that Granato would remain a Red Wings assistant through the end of the season.\n\nGranato will be joined on the Badgers' coaching staff by his younger brother Don and former Ohio State Buckeyes coach Mark Osiecki."
	},

	{	
		"id": 24,
		"title": "Robinson Cano goes deep 3 times, has 7 RBIs in Cactus win", 
		"author": "Associated Press",
		"abstract": "MESA, Ariz. -- After Robinson Cano homered in each of his first two at-bats, Seattle Mariners manager Scott Servais heard a fan throw out a challenge",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-27T00:00:00-05:00",
		"img": "img/cano.jpeg",
		"topic": ["Sports"],
		"content": "MESA, Ariz. -- After Robinson Cano homered in each of his first two at-bats, Seattle Mariners manager Scott Servais heard a fan throw out a challenge: \n\n\"You hit one to right, you hit one to left. Let me see you hit one to center.\"\n\n\"And he did,\" Servais said. \n\nCano had three home runs and seven RBI to help the Mariners outlast the Chicago Cubs 12-9 Sunday in a game that was delayed for several minutes by a swarm of bees in center field. \n\nCano had a two-run and a three-run homer off Cubs starter Jason Hammel, who allowed nine runs and eight hits in 4 1/3 innings. Cano added a two-run shot off Trevor Cahill in the eighth and finished 4 for 4."
	},

	{	
		"id": 25,
		"title": "Facebook activates Safety Check after Brussels attacks", 
		"author": "David Goldman",
		"abstract": "Facebook has activated its Safety Check feature, so people in Brussels can let loved ones know they're okay.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-22T00:00:00-05:00",
		"img": "img/facebook.jpeg",
		"topic": ["Technology"],
		"content": "Facebook has activated its Safety Check feature, so people in Brussels can let loved ones know they're okay. \n\nA suicide bombing at the Brussels airport and an attack on the Brussels Metro on Tuesday left dozens dead and many more injured. \n\nAs in similar attacks and natural disasters, Facebook's Safety Check prompts people in the region to mark themselves as \"safe.\"\n\nIn addition to themselves, people can declare other friends \"Safe,\" \"Unsafe,\" or \"Not in the area.\" Safety statuses appear as a notification on their friends' Facebook accounts and News Feeds. Friends will then get an alert in their news feeds. That information could be listed on someone's profile or disclosed when using the \"Nearby Friends\" feature.\n\nFacebook (FB, Tech30) unveiled Safety Check in 2014. The attacks on Paris four months ago were the first time that Facebook used Safety Check for a terror attack, previously only using the tool for natural disasters."
	},


	{	
		"id": 26,
		"title": "After racist tweets, Microsoft muzzles teen chat bot Tay", 
		"author": "Hope King",
		"abstract": "Microsoft's public experiment with AI crashed and burned after less than a day.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-24T00:00:00-05:00",
		"img": "img/microsoft.jpeg",
		"topic": ["Technology"],
		"content": "Microsoft's public experiment with AI crashed and burned after less than a day. \n\nTay, the company's online chat bot designed to talk like a teen, started spewing racist and hateful comments on Twitter on Wednesday, and Microsoft (MSFT, Tech30) shut Tay down around midnight. \n\nThe company has already deleted most of the offensive tweets, but not before people took screenshots."
	},

	{	
		"id": 27,
		"title": "The top 100 tech investors are mostly white men", 
		"author": "Sara Ashley O'Brien",
		"abstract": "There are too few female investors and even fewer black ones. Period",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-23T00:00:00-05:00",
		"img": "img/investor.png",
		"topic": ["Technology"],
		"content": "There are too few female investors and even fewer black ones. Period. \n\nOn Wednesday, Forbes unveiled its annual Midas List, a ranking of the top 100 tech investors. The list consists of just five women and zero black investors. \n\nIt's not shocking, given recent studies on the lack of diversity in venture capital. \n\nWomen make up just 8% of senior investment teams, while black and Hispanics make up just 1% each. \n\nForbes isn't to blame: It takes a data-driven approach to formulating its list. \n\nAlong with data partner TrueBridge Capital Partners, Forbes culled through \"hundreds of funds\" and partners, examining publicly available data from the past five years. It looked at startup exits (IPO or acquisition deals of $200 million or more) and portfolio companies that have raised $400 million or more (taking into account that, with private companies, investors have yet to see their returns)."
	},

	{	
		"id": 28,
		"title": "Apple's encryption fight is far from over", 
		"author": "David Goldman",
		"abstract": "Apple's closely watched fight with the FBI over a San Bernardino terrorist's iPhone may not take place after all. But the bigger battle is far from over.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-22T00:00:00-05:00",
		"img": "img/apple.jpg",
		"topic": ["Technology"],
		"content": "Apple's closely watched fight with the FBI over a San Bernardino terrorist's iPhone may not take place after all. But the bigger battle is far from over. \n\nThe company is opposing similar demands by the feds in at least a dozen other active cases. Court orders in those cases require Apple to help law enforcement bypass the security of suspects' iPhones. \n\nThe dozen cases all boil down to this question: How far does the law go to compel a tech company to help the government access information stored on a locked gadget? The government cites a 1789 law used to fill in the gaps of other, more explicit laws: the All Writs Act."
	},

	{	
		"id": 29,
		"title": "10 years later, Twitter still isn't close to making money", 
		"author": "David Goldman",
		"abstract": "Twitter has come a long way since the first tweet was sent 10 years ago Monday ('just setting up my twttr').",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-21T00:00:00-05:00",
		"img": "img/twitter.jpeg",
		"topic": ["Technology"],
		"content": "Twitter has come a long way since the first tweet was sent 10 years ago Monday (\"just setting up my twttr\"). \n\nThe problem is that Twitter hasn't grown much lately. It shed 2 million customers in the last three months of 2015. And the company has never turned a profit. \n\nTwitter has lost $2 billion since in 2011. \n\nNew management, products, designs and features haven't done much to move the needle. \n\nTwitter (TWTR, Tech30) has been able to effectively generate sales from sponsored tweets and partnerships. But it hasn't been able to expand its reach the way its social media rivals like Facebook have."
	},

	{	
		"id": 30,
		"title": "Galaxy S7 Edge is as sexy as it is smart", 
		"author": "Hope King",
		"abstract": "Smartphones have become status symbols and statement makers -- much like luxury cars. The new Samsung Galaxy S7 Edge is a good example of this idea.",
		"like": 1,
		"dislike": 0,
		"time": "2016-03-08T00:00:00-05:00",
		"img": "img/s7.jpeg",
		"topic": ["Technology"],
		"content": "Smartphones have become status symbols and statement makers -- much like luxury cars. The new Samsung Galaxy S7 Edge is a good example of this idea. \n\nWith a price tag of almost $800, customers are paying an ultra premium. And while the phone has tons of features that cater to nearly every whimsical need, many just seem superfluous. \n\nAfter using the S7 Edge for about a week, I've come to love the way it looks and feels in my hands. It shines, it gleams. It's sexy. \n\nI also love how the phone performs. Everything feels instantaneous. Apps load incredibly fast. The fingerprint reader works with the slightest touch. The always-on display is really helpful. And the phone charges in less than 80 minutes."
	}
];


for(var i = 0; i < new_list.length; i++) {
	var date = new Date(new_list[i].time);
	db.news.insert({id:new_list[i].id, title:new_list[i].title, author:new_list[i].author, abstract:new_list[i].abstract, topic:new_list[i].topic ,like:new_list[i].like, dislike: new_list[i].dislike, time:date, img:new_list[i].img, content:new_list[i].content});
}



