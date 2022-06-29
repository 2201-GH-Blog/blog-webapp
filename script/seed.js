'use strict'

const { db, models: { User, BlogPost, Comment, Subscription, Tag } } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'codyRulz', firstName: 'cody', lastName: 'codyson', email: 'cody@cody.net', password: '123', isAdmin: true }),
    User.create({ username: 'murphyRulz', firstName: 'murphy', lastName: 'murphyson', email: 'murphy@murphy.net', password: '123' }),
    User.create({ username: 'kroy94', firstName: 'Kelsey', lastName: 'Roy', email: 'kelseytylerroy@gmail.com', password: '123', isAdmin: true, bio: `Kelsey Roy is a Software Engineer who is seeking to implement socially conscious practices in the tech sphere. In her previous roles as a Data Analyst and Operations Manager, she helped Standvast–a transformative healthcare and ecommerce supply chain startup–innovate their fulfillment and supply chain processes through software and data driven insights. She also worked as a Project Management Consultant for an omnichannel retailer to implement a new Warehouse Management System that is integrated with Microsoft’s D365. These professional opportunities, in addition to a book she read in 2020 called Algorithms of Oppression, inspired her to transition her career to software engineering. Kelsey is devoted to a career working for mission-driven organizations with diverse and collaborative environments that make a positive difference in the world. Related to her passion for supporting DEI efforts in tech, she is also interested in the ethics surrounding AI, machine learning, and computing in general. Outside of tech she loves cooking for the people she loves and finding new places to explore in her community. She is currently based in Brooklyn, NY but will be taking her web development skills to Portland, OR in July 2022.`}),
    User.create({ username: 'dviglucci', firstName: 'Diana', lastName: 'Viglucci', email: 'dvigl86@gmail.com', password: '123', isAdmin: true, bio: `Diana Viglucci (they/them) is a full stack developer, community-builder, and lifelong learner. They like writing code that brings people joy, helps them learn something new, or that makes resources more accessible. Diana completed their technical training at the Grace Hopper Program, where they were best known for their Stackathon-winning rat tracker app. Prior to transitioning into tech, they worked in community-based nonprofit programs, supporting individuals and their families as they navigated mental health issues, career changes, and LGBTQ+ identity. A cum laude graduate of Cornell University, Diana finds joy in making art, spending time in nature, and turning off their phone for hours-long stretches. Their work is grounded in person-centered, trauma-informed, and intersectional perspectives - and always will be - because software is for people.` }),
    User.create({ username: 'Jessdonig', firstName: 'Jessica', lastName: 'Donig', email: 'jessdonig@gmail.com', password: '123', isAdmin: true, bio: `Jessica Donig (she/her) is a Fullstack software engineer with a background in social entrepreneurship. Prior to attending Grace Hopper, Jessica co-founded a nonprofit, worked as the first employee of a YC-backed startup, and conducted clinical research at Stanford University. From the time she entered the startup world in 2015, Jessica wanted to learn to code, but the lack of female representation in the field had made her hesitant to do so. Now that she has completed her coursework, Jessica is passionate about helping other nontraditional engineers—especially women—see themselves in tech.` }),
    User.create({ username: 'VioletCutler', firstName: 'Violet', lastName: 'Cutler', email: 'luminancesignal@gmail.com', password: '123', isAdmin: true, bio: `Violet Cutler (She/They) is a trans woman living in Philadelphia. She has been an artist and performer for more than a decade, recording videos on VHS and performing soundtracks to them on Saxophone and Synthesizer. She has also spent that time organizing DIY events in the queer and trans community and really values community building.She spent the last 4 years working in a food coop. She co-organized a successful union campaign when Covid struck. Despite this success, the dangers of the pandemic drove her to look for another way to support herself. In August of 2021, she quit her job and began studying to get into the Grace Hopper Program at Fullstack Academy. She graduated in April 2022 and looks forward to a career in Tech and Game Development. Her priorities moving forward are accessibility of the web and creating spaces in tech for other marginalized identities.` }),
    User.create({ username: 'MerleESelf', firstName: 'Merle', lastName: 'Self', email: 'merleself@gmail.com', password: '123', isAdmin: true, bio: `` }),
  ])

  // Creating Blog Posts
  const blogPosts = await Promise.all([
    BlogPost.create({
      title: "Intercode: An Introduction",
      mediumLink: "https://intercode.medium.com/intercode-an-introduction-a368579be31c",
      image: "https://miro.medium.com/max/1354/1*BrYIM84Ud5j3zi1dOeFiDw.png",
      summary: "Intercode (www.intercode.blog) is a collective of voices exploring how the intersection of identity and privilege impacts every facet of the tech industry-including access, culture and the ethics governing the space. Through candid conversation and writing, we work to tackle the ways current DEI efforts can still fall short in fostering inclusive and equitable spaces.",
      //How might we want to structure the text as it's stored in the database?
      //storing like this does not allow for us to use hyperlinks!
      text: `The idea for Intercode began with several candid discussions amongst a group of software developers and recent graduates from the Grace Hopper Program, a NY-based bootcamp targeted towards historically underrepresented candidates in the field of engineering. While sharing our perspectives we quickly realized that these discussions were valuable enough to merit a larger audience and began laying the groundwork to create a formal space for us to share these perspectives with the world.
      
      Some of the founding members of Intercode recently sat down with Dr. Deb Donig — a professor of English Literature and the founder of the Ethical Technology Initiative at Cal Poly — for a round table discussion on her podcast Technically Human to talk about their experiences transitioning into the tech industry. Check out Part 1 and Part 2 of the podcast to hear about their journeys and the insights they've shared.
      
      Intercode posts on a biweekly basis, so follow our Medium page or subscribe to our email notifications to keep up to date with the work we're doing.`
    }),
    BlogPost.create({
      title: "We Are Engineers: A Manifesto",
      mediumLink: "https://intercode.medium.com/we-are-engineers-a-manifesto-cf32446e3c20",
      image: "https://miro.medium.com/max/960/0*s4mA5rIsdZqKtlXQ",
      summary: "We aren't your average engineers, and that's a good thing.",
      text: `When we read James Damore's memo, we were outraged. The royal we. The INTERNET we.

      “What kind of person would make such a disgusting argument?” We screamed into the twitterverse.
      
      Then, to ourselves, we corrected the question. “Who would ADMIT to believing such an argument? ” we asked incredulously. “Who would put it in a memo?”
      
      We corrected our question because the original question is naive. The entire tech industry makes James Damore's argument, by who it hires, by what it values, by what it builds*. Just never out loud. Never in a memo.
      
      But we aren't here to talk about James Damore. We are here to talk about engineering. Because we are engineers.
      
      We aren't your average engineers. In fact, we aren't your average anything. We are people, with different experiences and perspectives, who have decided to learn to code so we can build careers and products.
      
      We aren't your average engineers, and we think that's a good thing. Our perspectives and presence in the field of engineering are valuable, and they aren't that well represented. That's why we've decided to write about them.
      
      We aren't a DEI initiative that got tacked onto a white male tech company five years ago when it became important to signal that said company did not in any way subscribe to CRAZY ideas about engineers being white and male. We are the actual engineers that those initiatives seek to include!
      
      We don't have all the answers to questions about diversity in tech. We do have a lot of questions — for ourselves, for each other, for the hiring managers who we hope will hire us, and for the broader tech community.
      
      What does it really look like to enter the engineering field without a computer science degree? Who is building our world through tech and who are they building it for? If we are the sum of our experiences, what does it mean to let our world be constructed by those drawn from the same narrow pool?
      
      We plan to use our blog to examine these questions and search for answers.
      
      We call ourselves Intercode because this name encapsulates the ideas at the heart of our work. We chose the prefix “inter-” because it refers to our intersectional identities, which are integral to how and what we code, and because it reflects our interdependency as engineers and as people. We chose “code” because it represents so many things relevant to our discussion: not just computer code, but also how we codify our society's structure by what we build and who gets to build it.
      
      We are Intercode. We are engineers exploring topics that matter. We hope you join us.
      
      *James Damore's memo came out in 2017 and was almost universally panned by tech companies. Google fired him. In their 2021 diversity report, Google stated that men occupy 72.1% of their technical roles globally. This is the standard across the tech industry as a whole.`
    }),
    BlogPost.create({
      title: "An Interview With Recent Coding Bootcamp Graduates",
      mediumLink: "https://intercode.medium.com/an-interview-with-recent-coding-bootcamp-graduates-a06198b2262e",
      image: "https://miro.medium.com/max/1400/1*d1c3gzIV2X_nnnQSykQrMg.jpeg",
      summary: "5 recent graduates of the Grace Hopper Program at Fullstack Academy share their thoughts on their transitions into tech.",
      text: `Disclaimer: The opinions reflected by interviewees are their own and don't represent any organization or company they are associated with. Nor do they reflect the perspectives of all participants of the Intercode Collective.
      
      The ethos of Intercode began with several candid discussions amongst a group of software developers and recent graduates from the Grace Hopper Program, a 17-week immersive software/web development program for gender marginalized individuals* through Fullstack Academy. Grace Hopper seeks to provide historically underrepresented people with a safer, more informed learning environment to increase the quantity of diverse candidates entering the tech industry. While bootcamps are challenging, they provide unique technical and professional development in a collaborative environment that has bolstered our ability to work on teams and develop high quality products and applications in a short period of time.
      
      After graduation, the Intercode collective sought to create a formal space for us to share our various perspectives with a wider audience. We recently sent out a questionnaire to members of our cohort asking for them to share reflections or personal musings they have in hindsight regarding their transition to tech. Diana Viglucci, Olivia Brzozowski, Sarina Chang, Violet Cutler, and Merle Self agreed to share their thoughts on these prompts below.
      
      We quickly noticed several different themes developing throughout our diverse narratives. The first of which being that the progressive veneer of the tech sector has been eroded through its systemic exclusion and exploitation of marginalized individuals. Our transition has been anything but smooth, and while there is appeal to programs like Grace Hopper that cater to specific affinity groups, increasing the number of qualified candidates does not challenge systemic exclusion in the first place. Transitioning to tech can be an isolating experience that a lot of marginalized people simply don't want to put themselves through.
      
      If the lack of a formal welcome won't get ya, then the imposter syndrome just might! No one was exempt from pervasive self doubt throughout the bootcamp, some just hid it better than others. The self doubt was not necessarily representative of a personal appraisal of our skills, but rather of our understanding of what an engineer was “supposed” to be. There is a mainstream narrative that to be successful in this space you must already have a natural born proclivity to technical or algorithmic thinking. But the skills we learned throughout the bootcamp are skills that anyone can learn with practice, patience, and persistence.
      
      The self doubt was also indicative of the difficulty of the program. Despite finding it ultimately rewarding, all the respondents took care to mention how challenging, time consuming, and exhausting this experience was. The pace and rigorous nature of our schedule kept us at the brink of exhaustion, while never fully pushing us over.
      
      Ultimately, the most rewarding part of the bootcamp for many respondents was the community support that was forged throughout our shared struggle. While the Grace Hopper program was merely a temporary protection from the aforementioned mindsets that persist in tech, we were able to use it to foster a sense of community that will continue to support each other in the spaces we choose to enter.
      
      *The Fullstack Academy website markets the Grace Hopper program as a “Immersive Web Development Education for Women and Non-Binary Coders”
      
      Why did you choose Grace Hopper? Are there specific aspects of your identity, or software engineering that made Grace hopper feel like a better choice for you? Please describe.
      
      Diana Viglucci: I knew that in addition to being a new skill set, moving into tech was going to be a huge change in terms of the work environment that I'm used to. I chose Grace Hopper because I wanted to meet future colleagues who would understand the experience of being underrepresented in tech and who I could be in solidarity with.
      
      Olivia Brzozowski: I chose Grace Hopper because I wanted a learning environment where I could gain the confidence to work in a tech space, without having to worry about sexism or egos. When I was choosing to do either Grace Hopper or Fullstack Academy, I came to the conclusion that I wanted a very inclusive learning environment. I acknowledged to myself that the “real world” would most likely not reflect how my cohort looked, but by being in a space of women, non-binary, and transgender people, it opened a space where we could have thoughtful dialogue, a great collaborative environment, and not have to worry about 'isms' as much. I realize that my perspective may be very different than someone else's, so this is just how I personally felt.
      
      Sarina Chang: I chose Grace Hopper for the same reason I believe many did: it was exclusive to women, non-binary, and trans people. I wanted to ensure a safe space for myself in a learning environment where I was going to be a complete beginner, and knowing others joined for that same reason made it easier to connect with them and grow together.
      
      Violet Cutler: As a non-binary trans woman, Grace Hopper felt like the only choice I had. I think there is one other bootcamp I found that explicitly seeks to serve women, non-binary, and trans people but the schedule didn't work for me at all. I just don't know if I could have finished if I was in a regular program. There were times during Grace Hopper where we were put into a group with the regular cohort, and it was a very different vibe. I could tell I would not have done well. Going through this program was the hardest thing I think I have ever done, and trying to defend my identity to my classmates would have made it unbearable.
      
      Merle Self: There were several reasons why I chose Grace Hopper over the general Fullstack Cohort. I was told in talks with the admissions staff at Fullstack Academy that the cohorts for Grace Hopper are generally smaller. I can struggle with learning new abstract concepts especially in large group settings. Smaller class sizes really appealed to me since I usually need to ask a lot of questions in order to help overcome some of my learning differences. I also wanted a space that did not cater to cis-men. Like many other women, non-binary, and trans folks I've had my fair share of negative interactions with cis-men. A lot of times I've held myself back from doing certain things because I've previously been in unsafe situations with men, whether it be educationally, professionally, and socially. So I was very thankful I could be a part of this group, that offered a way to learn in a setting where I didn't constantly feel on edge, and that offered a sense of belonging.
      
      How did you feel about the tech sector before joining Grace Hopper? How does your previous field/position compare to the tech sector?
      
      Diana Viglucci: It's pretty ironic that I want to be in this field. I have felt for a long time that tech facilitates a lot of worker exploitation and that it has accelerated inequality by baking it into these huge systems. In my adult life I have always had this gross fascination with how that works because I'm interested in power, wealth, and how those things are distributed. I wanted to get into tech in part because it was a quick way to change careers, but also because I have a romantic and probably bullshit idea of infiltrating some of these spaces and trying to create change, even if on a super small scale.
      
      I used to work in the nonprofit sector. I think there are a lot of parallels between tech and nonprofit because both fields are full of people who are purporting to change the world while not actually doing anything to challenge power dynamics and meaningful access to wealth and resources in society. In other words, systems and root causes are not being challenged, but there's a patina of diversity and some increased access to things on top of the same old same old.
      
      The caveat to this is that it mostly applies to the leadership and/or funders who are pulling all the actual strings. In terms of my direct colleagues, I have met some of the most caring and radical people I know in the nonprofit sphere, people who think deeply about how they impact others and how they might contribute to transformative change. In the nonprofit world, I could always take it for granted that I would find colleagues who actively prioritized social justice in their lives. That's unfortunately no longer an assumption I can make moving into tech.
      
      I am also bracing myself to have to constantly advocate for my correct pronouns being used in whatever tech job I end up in. In former workplaces, misgendering obviously came up, but at least folks had a baseline level of awareness of non-binary, and trans identities. So, that's again something I can't take for granted anymore.
      
      Olivia Brzozowski: I'd say I always felt very 'meh' about it, because I only got interested in the tech sector in late 2020 and just never really cared much for it prior, knowing how heavily male dominated and white it is. When I first decided it was the route I was going to pursue, I googled women's organizations and found Women Who Code, so I decided to get more involved with them. My previous field was also male dominated — I was working in college athletics. I was involved in a women's organization there as well, so I do think those experiences equipped me for tech.
      
      Sarina Chang: I was always interested in the tech field, but never had a chance to really dive into it as I graduated from college not too long ago. I studied graphic design and thought the opportunity to combine both fields was too good to pass up.
      
      Violet Cutler: As far as my background, I come from a very different work experience. I have worked many different kinds of jobs including retail, manual labor, grocery, and even a few factories. Trying to get a job in tech is the first time in my 31 years that I have ever tried to enter the “professional world” and it feels confusing and scary.
      
      I have always felt skeptical of the tech industry. I still feel skeptical of the tech industry, to be perfectly honest, and I don't think I ever imagined I would try to work within it. Tech holds within it some of the greatest scams and grifts. I think people put too much faith in technology as a way of papering over more fundamental problems.
      
      That being said, I also love technology. I come from an artistic background and have seen so many brilliant pieces, games, and interactive websites that I cherish. And I have seen some profound interactions between strangers that could not have happened otherwise. Tech is so powerful but it comes down to how it is used.
      
      Merle Self: I've always felt like tech was inaccessible to me in certain ways. Most folks heavily rely on technology, I know I'm certainly one of them — but I never felt like I could work in STEM. I believed that I just “didn't have the type of brain for it.” Which in hindsight is such bullshit. I also was, and still am, fairly turned off by certain aspects of tech. Folks not being able to acknowledge the harm that giants in the tech space perpetuate because of the good that has come from them, is one of those things. It seems like some people feel that in order to work and be accepted in this field you are not allowed to critique these things.
      
      My last few positions couldn't be more different. I was managing teams within specialty coffee and beauty retail. The folks I worked with ranged over a large spectrum of identities and were majority queer. In contrast to tech, retail and coffee tend to have the reputation of being fields that require very little skill, which is the furthest thing from the truth. All labor requires skill. I've seen very smart people not succeed in these spaces because they underestimated how challenging these jobs can be. They often require a lot of soft skills that not all people have the need, or desire, to develop. I'm grateful for my time working in customer facing positions, and I think that makes me highly valuable moving into this next phase of my career.
      
      How did you feel during the Grace Hopper Bootcamp?
      
      Diana Viglucci: Constantly overwhelmed. I think the lack of direct feedback on how I was doing allowed me to spiral in anxiety a lot.
      
      I also dealt with a lot of feelings of inferiority specifically during the project phase of the program. Some of my teammates had seemingly infinite capacity to put in long hours working on code. Due to burnout from my previous career as well as my history with mental illness, that's just not something that is possible for my brain even temporarily. I had to put in a lot of effort making peace with the fact that I was completing a smaller portion of the project than others, which was hard.
      
      Olivia Brzozowski: As with any bootcamp, I felt overwhelmed at times and twice wanted to quit because I thought I was awful at coding and going nowhere. But pushing through and making friends throughout helped me immensely. I kept telling myself that the bootcamp experience was only temporary and to just take full advantage of each day at bootcamp because it would be over in the blink of an eye.
      
      Sarina Chang: It definitely wasn't easy, but what made it bearable was the fact that I loved what I was learning and doing throughout it, even through the stressful moments.
      
      Violet Cutler: I went through so many cycles of exhaustion and frustration and fear. I did not get in the first time I applied, and the second time I applied I felt like I just squeaked by. So the whole time I was there I was wondering if they made a mistake or if I was actually qualified to be there. I was worried about not passing, having to drop out, and being humiliated.
      
      And the material was so challenging. I have never pushed myself this hard before, and my social life all but vanished during these months. The last few weeks were a fever dream of 12 hour days and 7 day weeks. When all was said and done I felt such a sense of accomplishment. And I now have friendships forged in the crucible, others who experienced that pain and frustration of that program and made it through with me.
      
      Merle Self: I'm very grateful for the established structure. It was certainly super challenging and stressful, but I think I would've been far more stressed trying to learn on my own. I also found it comforting to be in a group of people who understood the stress I felt and could help to support each other. I also doubted at times if I made the right choice. Growth is hard. It was tempting to cave to the mean little voice in my head regurgitating things I've been told in the past about my perceived competence. But that voice is not mine, and I'm glad I didn't listen.
      
      How do you feel now that you've completed the Grace Hopper Bootcamp? Do you have any reflections on what your experience has been like thus far?
      
      Diana Viglucci: As much as the bootcamp was hard, in a way I feel like this post-program time is harder. While I definitely appreciate (and need) having more time to maintain my basic self-care, having to do everything on my own and the lack of daily support from peers has been intimidating. The best outcome of Grace Hopper, so far, has hands down been the community. Beyond that, I'm almost wondering if I should have done a part time program that would have given me more time to absorb stuff and develop a strong portfolio. But that might just be me doubting myself, so it's hard to say. 100% I don't regret doing it though. I would rather be struggling through this and growing than stuck at my old job depleting myself.
      
      Olivia Brzozowski: I feel way more prepared than several months ago. Before enrolling at Grace Hopper, I had learned Python and learned about full stack development (databases, Api's, front-end, etc) over the course of about 8 months. I then started applying to jobs on my own and felt like I was going nowhere in my job search — and felt very limited with the technologies I knew. That is what led me to Grace Hopper, and now that I have graduated, I feel way more equipped with the tools and technologies to be able to pursue something real. As I reflect so far, I am so grateful for the Grace Hopper and Fullstack Academy communities. It feels nice to be an alum of a highly respected bootcamp, and I am thankful for the resources we still have post grad (such as career services). Staying in contact with people from my cohort has been really wonderful too, as we can give each other advice or just support each other as we navigate the brutal job search.
      
      Sarina Chang: Although I suffer from imposter syndrome constantly, I can say I'm very proud of myself for graduating from Grace Hopper. It's helped boost my confidence immensely, in my technical skills as well as socializing. I'm grateful to all the teachers, mentors, and classmates I've met that helped me grow and believe in myself.
      
      Violet Cutler: I feel a little shell shocked. Bootcamp was unbelievably intense, and it really burnt me out. Once I graduated, I did have a big burst of energy to try to find a job but that quickly faded as I realized I really need to recover from so many 12 hour days. Now that I am out of the program, I am struggling to trust that I still hold all that information. I am not spending as much time coding, and that makes me nervous and feel like I will lose some of it. But I have to live my life too. So I am trying to find a balance.
      
      Merle Self: Very proud. I cried on the day of graduation and many days leading up to it. I realized how much I had just learned and was so happy I didn't give up. I'm still wildly stressed though. Learning is one thing, and proving to myself that I'm qualified was the first hurdle. Now that school is done I have to find someone who is willing to take a chance on a new graduate, which is easier said than done in the wake of tech layoffs and an impending recession. I'm so grateful to have a good support system that saw my potential to succeed and for my fellow grads to commiserate with during our collective transition. I'm also reminded of my own privilege to be able to participate in this program. $17,000 is a lot of money. While I think anyone is capable of learning to code, the barrier to entry for some is insurmountable, not only monetarily but also for the sheer amount of time needed to make this transition.
      
      What do you hope to accomplish in the next year?
      
      Diana Viglucci: Get a dev job and don't get fired from it. Maintain and hopefully deepen my relationships from Grace Hopper. Spend less time worrying about how I sell my labor and more time feeling joy. And bust open the door behind me to bring more underrepresented people into this field!
      
      Olivia Brzozowski: to get a job :)
      
      Sarina Chang: I believe I'm always a work in progress, so I'd like to keep bettering myself the next year, and the next, and so on. I'd like to keep making new friends and connections and working in a supportive, diverse environment where I can help make a difference to people / the world.
      
      Violet Cutler: I really just want to land my feet on the ground. I don't have a strong idea of what kind of tech work I would like to do so I want to get some experience. A lot of people have said that the first job is the hardest to get so I am mostly focused on trying to get a job so I can get over that hurdle.
      
      Merle Self: I hope that I'm working, first and foremost. I hope that I don't have to compromise what I ultimately want from the company that employs me. I want to grow as a developer, learn new frameworks, and challenge myself. I want to be a part of a team that I feel included in and fully supported by. I also want to help more folks who are non-traditional tech transplants find their way through mentorship and mutual aid.
      
      What's one thing you wish you'd known before starting this process?
      
      Diana Viglucci: I wish I had known that I was gonna:
      
      1. Get interviews at all, and
      2. Get interviews despite having forgotten a lot of the material that we learned.

      Basically, I wish I knew that the mindset of how to program and look stuff up is more important than the specific details of how you use a technology. Maybe I could have relaxed more when I struggled with stuff, but also I just worry as a default so maybe not.
      
      Sarina Chang: Googling or asking for help isn't a crime. What matters is the effort you put into learning and understanding the answers you find. And although it's always hard not to compare, everyone learns at different paces. Focus on yourself, and as long as you have a goal in mind, you'll reach it.
      
      Violet Cutler: I knew that this process was going to be hard but I wish I could explain to myself in the past exactly how hard. I want to tell myself to pace myself and to be gentle and not assume I am going to fail just because it is difficult.
      
      Merle Self: I wish I'd known a lot of things. Mostly I wish I'd known that I have a learning difference. I wish I'd known that far earlier in life, not just in the context of this process. Too many times throughout my life I thought I couldn't do something simply based on what others had told me was an inherent lack of aptitude on my part. That colored a lot of my early experiences trying to learn JavaScript. After being accepted to Grace Hopper, I was diagnosed with inattentive ADHD. I beat myself up a lot over what I thought was intellectual failure, but was something that I could've been treated for my whole life that had gone undiagnosed. I wish I had known sooner how to advocate for myself.
      
      Anything other musings about this process and transition that you'd like to talk about?
      
      Olivia Brzozowski: Coding is HARD!!! But something I've learned is that community is everything. Before Grace Hopper, I was being mentored by my dad (a programmer of about 30 years), and it got lonely at times because I didn't have anyone around me going through a similar experience. That is a big reason I decided to go the bootcamp route; I wanted to collaborate with others around the same skill level as me. Having such a supportive community really makes a difference, and I'm grateful for all the wonderful people I've met throughout this process.
      
      Sarina Chang: Post-grad job search while still studying and working on side projects definitely hasn't been easy; but I'm confident we'll all make it soon. Short term suffering for long term success! Good luck everyone, and I miss you all from 2201-GH!
      
      Merle Self: Simply, that I am tired, stressed, happy, scared, and excited.`
    }),
  ])

  const tags = await Promise.all([
    Tag.create({ tagName: 'Identity'}),
    Tag.create({ tagName: 'LGBTQIA+'}),
    Tag.create({ tagName: 'Black Experiences'}),
    Tag.create({ tagName: 'Tech Transitions'}),
    Tag.create({ tagName: 'Coding Bootcamp'}),
  ])
  

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1],
      kelsey:users[2],
      diana: users[3],
      jessica: users[4],
      violet: users[5],
      merle: users[6],
    },
    blogPosts: {
      intro: blogPosts[0],
      weAreEngineers: blogPosts[1],
      interview: blogPosts[2]
    },
    tags: {
      identity: tags[0],
      lgbtqia: tags[1],
      blackExperiences: tags[2],
      techTransitions: tags[3],
      codingBootcamp: tags[4],
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
