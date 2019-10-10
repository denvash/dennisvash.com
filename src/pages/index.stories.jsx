import React from 'react';
import IndexPage from '@pages';

const data = {
  data: {
    site: {
      siteMetadata: {
        title: 'Dennis Vash | Software Engineer',
        siteUrl: 'https://dennisvash.com',
        description:
          'Dennis Vash is a software engineer based in Haifa, Israel who specializes in developing exceptional, high-quality websites and applications.',
      },
    },
    hero: {
      edges: [
        {
          node: {
            frontmatter: {
              title: 'Hi, my name is',
              name: 'Dennis Vash',
              subtitle: 'I create things for the web.',
            },
            html:
              "<p>I'm a software engineer based in Israel, specializing in building and designing exceptional,\nhigh-quality websites and applications.</p>",
          },
        },
      ],
    },
    about: {
      edges: [
        {
          node: {
            frontmatter: {
              title: 'About Me',
              skills: [
                'HTML & CSS-in-JS',
                'React',
                'Redux',
                'Node.js',
                'Express',
                'GraphQL',
                'Figma',
              ],
            },
            html:
              "<p>Hello! I'm Dennis, a (future) software engineer based in Haifa, Israel who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern back-ends.</p>\n<p>Here's is my favorite technologies stack:</p>",
          },
        },
      ],
    },
    jobs: {
      edges: [
        {
          node: {
            frontmatter: {
              title: 'Software Engineering Intern',
              company: 'Facebook',
              location: 'Israel',
              range: '2020 - Present',
              url:
                'https://www.facebook.com/careers/students-and-grads/?teams[0]=Internship%20-%20Engineering%2C%20Tech%20%26%20Design&teams[1]=Internship%20-%20Business&teams[2]=Internship%20-%20PhD&teams[3]=University%20Grad%20-%20PhD%20%26%20Postdoc&teams[4]=University%20Grad%20-%20Engineering%2C%20Tech%20%26%20Design&teams[5]=University%20Grad%20-%20Business',
            },
            html:
              '<ul>\n<li>Full time 12 weeks intern program at <a href="https://www.facebook.com/careers/locations/tel-aviv/?locations%5B0%5D=Tel%20Aviv%2C%20Israel" target="_blank" rel="nofollow noopener noreferrer">Facebook TLV</a>.</li>\n<li>Paired with a 1:1 mentor.</li>\n<li>Ship end-to-end project for Facebook ecosystem.</li>\n</ul>',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'Full Stack developer',
              company: 'Rafael',
              location: 'Israel',
              range: '2017 - 2020',
              url: 'https://www.wikiwand.com/en/Rafael_Advanced_Defense_Systems',
            },
            html:
              '<ul>\n<li>Data-Science &#x26; Advanced information analysis department at Rafael Advanced Defense Systems ltd.</li>\n<li>Working in a small team of four engineers, contribute core features across entire stack.</li>\n<li>Shipping to production as solo project, a web-based application.</li>\n<li>The project, CI/CD and deploying are open sourced on Github.</li>\n<li><a href="https://www.wikiwand.com/en/Microservices" target="_blank" rel="nofollow noopener noreferrer">Microservices</a> architecure.</li>\n</ul>',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'CS Student',
              company: 'Technion',
              location: 'Israel',
              range: '2015 - 2020',
              url: 'https://www.wikiwand.com/en/Technion_%E2%80%93_Israel_Institute_of_Technology',
            },
            html:
              '<ul>\n<li>BSc in Computer Science</li>\n<li>Percent Grade: 85 / GPA: 3.0</li>\n<li><a href="https://en.wikipedia.org/wiki/Aquathlon" target="_blank" rel="nofollow noopener noreferrer">Aquathlon</a> Team Member</li>\n</ul>',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'Squad Leader',
              company: 'Egoz Unit',
              location: 'Israel',
              range: '2010 - 2014',
              url: 'https://www.idf.il/en/minisites/egoz-unit/',
            },
            html:
              '<ul>\n<li>Reserve Duty: Squad Leader | <em>First Sergeant</em>.</li>\n<li>Compulsory &#x26; Warrant Service: Squad Leader | <em>Sergeant</em>.</li>\n</ul>',
          },
        },
      ],
    },
    featured: {
      edges: [
        {
          node: {
            frontmatter: {
              title: 'HKube - HPC over Kubernetes',
              tech: ['Node.js', 'React', 'Redux', 'Figma', 'Ant-Design'],
              github: 'https://github.com/kube-HPC/hkube',
              external: 'http://hkube.io/',
              show: 'true',
            },
            html:
              '<p>HKube is a cloud-native open source framework to run distributed pipeline of algorithms built on Kubernetes.</p>\n<p>HKube optimally utilizing pipeline\'s resources, based on user priorities and heuristics.</p>\n<p>HKube provides a web-based <a href="https://github.com/kube-HPC/simulator" target="_blank" rel="nofollow noopener noreferrer">Dashboard</a> which supports its every functionality.</p>',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'Jesta',
              tech: ['Kotlin', 'Firebase', 'Android', 'Figma'],
              github: 'https://github.com/denvash/jesta-android-app',
              external: 'https://denvash.github.io/jesta-android-app/',
              show: 'true',
            },
            html:
              '<p>Jesta is a social application which connects between people who are willing to take up tasks and people who publish them.</p>',
          },
        },
      ],
    },
    projects: {
      edges: [
        {
          node: {
            frontmatter: {
              title: 'dennisvash.com',
              image: '',
              tech: ['Gatsby', 'React', 'CSS-in-JS', 'Figma'],
              github: 'https://github.com/denvash/dennisvash.com',
              external: 'https://dennisvash.com/',
              show: 'true',
            },
            html:
              '<p>Server side rendering Personal website empowered by <a href="https://www.gatsbyjs.org/" target="_blank" rel="nofollow noopener noreferrer">Gatsby</a>.</p>',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'Open The Knock',
              image: null,
              tech: ['IoT', 'Azure', 'Xamarin'],
              github: 'https://github.com/denvash/open-the-knock-IoT',
              external:
                'https://user-images.githubusercontent.com/27515937/51446218-a74ff800-1d17-11e9-8522-e07eff4380a4.png',
              show: 'true',
            },
            html:
              '<p>OTK is a Knocking-Lock, a lock which opens on a specific rhythm of knocks and a LCD screen\nwhich provides the information of the current lock state.</p>',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'Summer Time Theme',
              image: '',
              tech: ['Figma', 'Material-Design', 'VS-Code'],
              github: 'https://github.com/denvash/summer-time-theme-vscode',
              external:
                'https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time#overview',
              show: 'true',
            },
            html:
              '<p>A modern Dark <a href="https://material.io/resources/build-a-material-theme/" target="_blank" rel="nofollow noopener noreferrer">Material Theme</a>\nwhich makes you forget the summer while coding.</p>',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'Create React VSCode',
              image: '',
              tech: ['Extensions-Pack', 'React', 'VS-Code'],
              github: 'https://github.com/denvash/create-react-vscode',
              external:
                'https://marketplace.visualstudio.com/items?itemName=DennisVash.create-react-vscode',
              show: 'true',
            },
            html:
              '<p>Maintained <a href="https://code.visualstudio.com/blogs/2017/03/07/extension-pack-roundup" target="_blank" rel="nofollow noopener noreferrer">VS-Code Extension Pack</a> for developing <a href="https://reactjs.org/" target="_blank" rel="nofollow noopener noreferrer">React applications</a>.</p>',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'CodinGame Solutions',
              image: '',
              tech: ['Algorithms', 'Data-Structures', 'Multi-Languages'],
              github: 'https://github.com/denvash/codingame-puzzles-solutions',
              external: null,
              show: 'true',
            },
            html:
              '<p>Various solutions for <a href="https://www.codingame.com/" target="_blank" rel="nofollow noopener noreferrer">Codingame</a> puzzles.</p>',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'Common Data Structures',
              image: '',
              tech: ['Algorithms', 'Data-Structures', 'Multi-Languages'],
              github: 'https://github.com/denvash/common-data-structures',
              external: '',
              show: 'true',
            },
            html:
              '<p>Implementations with complexity analysis of common <a href="https://www.wikiwand.com/en/Data_structure" target="_blank" rel="nofollow noopener noreferrer">Data-Structures</a>.</p>',
          },
        },
      ],
    },
    contact: {
      edges: [
        {
          node: {
            frontmatter: {
              title: 'Lets Talk!',
            },
            html:
              "<p>Whether for a potential project, web, open source or any computer science topic, I'll glad to talk!</p>",
          },
        },
      ],
    },
  },
};

export default {
  title: 'Pages|Index',
};

export const Default = () => <IndexPage {...data} />;
