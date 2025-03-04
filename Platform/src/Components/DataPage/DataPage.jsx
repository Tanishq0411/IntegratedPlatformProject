// src/Components/DataPage/DataPage.jsx
import React from 'react';
import './DataPage.css';

const DataPage = ({ topic }) => {

  


  const getArticleText = (topic) => {
    switch (topic) {
      case 'Python':
        return "Python is a popular programming language known for its simplicity and versatility, used in web development, data science, automation, and more.";
      case 'Java':
        return "Java is a widely used, object-oriented programming language known for its portability across platforms, used in web applications, mobile apps, and enterprise systems.";
      case 'C':
        return "C is a procedural programming language, often used for system-level programming and in applications where performance is crucial.";
      case 'C++':
        return "C++ is an object-oriented programming language that builds on C, adding features like classes and objects, widely used in game development and systems programming.";
      case 'JavaScript':
        return "JavaScript is a versatile, high-level programming language commonly used in web development to create interactive and dynamic web pages.";
      case 'PHP':
        return "PHP is a popular server-side scripting language used for web development, particularly for creating dynamic web pages and web applications.";
      case 'Ruby':
        return "Ruby is a dynamic, object-oriented programming language known for its simplicity and ease of use, often used in web development with Ruby on Rails.";
      case 'Swift':
        return "Swift is a powerful and intuitive programming language developed by Apple for iOS and macOS app development.";
      case 'Go':
        return "Go is a statically typed programming language developed by Google, known for its simplicity and performance in building scalable systems.";
      case 'R':
        return "R is a programming language used for statistical computing and graphics, commonly used in data analysis and machine learning.";
      case 'Kotlin':
        return "Kotlin is a modern programming language for Android development, designed to be fully interoperable with Java.";
      case 'Scala':
        return "Scala is a hybrid programming language that combines object-oriented and functional programming paradigms, used in big data applications and more.";
      case 'Perl':
        return "Perl is a high-level programming language known for its text-processing capabilities, often used in system administration and web development.";
      case 'Haskell':
        return "Haskell is a purely functional programming language known for its strong type system and immutability, often used in academic and research settings.";
      case 'Lua':
        return "Lua is a lightweight, high-performance programming language often used in game development and embedded systems.";
      case 'TypeScript':
        return "TypeScript is a statically typed superset of JavaScript, adding type annotations for better development tooling and error checking.";
      case 'SQL':
        return "SQL (Structured Query Language) is used for managing and querying relational databases, a crucial skill for data analysts and developers.";
      case 'Assembly Language':
        return "Assembly language is a low-level programming language used for direct hardware manipulation, often used in embedded systems and performance-critical applications.";
      case 'C#':
        return "C# is a modern, object-oriented programming language developed by Microsoft, widely used for developing web applications, games, and desktop applications.";
      case 'Dart':
        return "Dart is a programming language developed by Google, commonly used for mobile, web, and desktop app development with the Flutter framework.";
      case 'Shell Scripting':
        return "Shell scripting is a way to automate tasks in a Unix/Linux shell, often used for system administration and automating repetitive tasks.";
      case 'Rust':
        return "Rust is a systems programming language designed for performance, safety, and concurrency, used in performance-critical applications.";
      case 'Julia':
        return "Julia is a high-level programming language designed for numerical and scientific computing, known for its speed and ease of use in data analysis.";
      case 'Matlab':
        return "MATLAB is a high-level language used for numerical computing, algorithm development, and data visualization, widely used in engineering and research.";
      case 'VBScript':
        return "VBScript is a scripting language developed by Microsoft for automation and web scripting, primarily used in Internet Explorer.";
      case 'Scratch':
        return "Scratch is a visual programming language designed for beginners, especially kids, to create games and interactive animations.";
      case 'Erlang':
        return "Erlang is a functional programming language used for building concurrent, distributed, and fault-tolerant systems, often used in telecommunications.";
      case 'COBOL':
        return "COBOL is a high-level programming language used primarily in business, finance, and administrative systems for large organizations.";
      case 'Ada':
        return "Ada is a statically typed, high-level programming language used in real-time and safety-critical systems, including aerospace and defense applications.";
      case 'Prolog':
        return "Prolog is a logic programming language used in artificial intelligence and computational linguistics.";
      default:
        return "Select a topic to learn more.";
    }
  };

  // Define video links dynamically based on the topic (3 links per topic)
  const getVideoLinks = (topic) => {
    const links = {
      Python: [
        { label: 'Learn more about Python', url: 'https://www.w3schools.com/python/' },
        { label: 'Python Hindi Tutorial', url: 'https://www.youtube.com/watch?v=gfDE2a7MKjA' },
        { label: 'Python English Tutorial', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
      ],
      Java: [
        { label: 'Learn more about Java', url: 'https://www.java.com/en/' },
        { label: 'Java Hindi Tutorial', url: 'https://www.youtube.com/watch?v=l6yZ94oXFlE' },
        { label: 'Java English Tutorial', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' },
      ],
      C: [
        { label: 'Learn more about C', url: 'https://www.geeksforgeeks.org/c-programming-language/' },
        { label: 'C Hindi Tutorial', url: 'https://www.youtube.com/watch?v=irqbmMNs2Bo' },
        { label: 'C English Tutorial', url: 'https://www.youtube.com/watch?v=KJgsSFOSQv0' },
      ],
      'C++': [
        { label: 'Learn more about C++', url: 'https://www.programiz.com/cpp-programming/online-compiler/' },
        { label: 'C++ Hindi Tutorial', url: 'https://www.youtube.com/watch?v=8jLOx1hD3_o' },
        { label: 'C++ English Tutorial', url: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y' },
      ],
      JavaScript: [
        { label: 'Learn more about JavaScript', url: 'https://www.w3schools.com/js/' },
        { label: 'JavaScript Hindi Tutorial', url: 'https://www.youtube.com/watch?v=hKBYGF14SY' },
        { label: 'JavaScript English Tutorial', url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk' },
      ],
      PHP: [
        { label: 'Learn more about PHP', url: 'https://www.javatpoint.com/php-tutorial' },
        { label: 'PHP Hindi Tutorial', url: 'https://www.youtube.com/watch?v=V2zP1P7lB3g' },
        { label: 'PHP English Tutorial', url: 'https://www.youtube.com/watch?v=OK_JCtrrv-c' },
      ],
      Ruby: [
        { label: 'Learn more about Ruby', url: 'https://www.rubylang.org/en/' },
        { label: 'Ruby Hindi Tutorial', url: 'https://www.youtube.com/watch?v=2eJ3eIgwc_Q' },
        { label: 'Ruby English Tutorial', url: 'https://www.youtube.com/watch?v=t_ispmWmdjY' },
      ],
      Swift: [
        { label: 'Learn more about Swift', url: 'https://www.geeksforgeeks.org/swift-programming-language/' },
        { label: 'Swift Hindi Tutorial', url: 'https://www.youtube.com/watch?v=YWc3N-9xeLw' },
        { label: 'Swift English Tutorial', url: 'https://www.youtube.com/watch?v=ComiWbV6ydg' },
      ],
      Go: [
        { label: 'Learn more about Go', url: 'https://go.dev/' },
        { label: 'Go Hindi Tutorial', url: 'https://www.youtube.com/watch?v=FDo1wp8sC7w' },
        { label: 'Go English Tutorial', url: 'https://www.youtube.com/watch?v=YS4e4q9oBaU' },
      ],
      R: [
        { label: 'Learn more about R', url: 'https://www.geeksforgeeks.org/r-programming-language-introduction/' },
        { label: 'R Hindi Tutorial', url: 'https://www.youtube.com/watch?v=ib1A8uWBzRw' },
        { label: 'R English Tutorial', url: 'https://www.youtube.com/watch?v=_V8eKsto3Ug' },
      ],
      // Add other languages similarly...
    };
    return links[topic] || [
      { label: `Learn more about ${topic}`, url: 'https://www.youtube.com' },
      { label: `${topic} Hindi Tutorial`, url: 'https://www.youtube.com' },
      { label: `${topic} English Tutorial`, url: 'https://www.youtube.com' },
    ];
  };

  const articleText = getArticleText(topic);
  const videoLinks = getVideoLinks(topic);

  return (
    <div className="data-page">
      <h1>{topic}</h1>
      <div className="article-container">
        <h2>About {topic}</h2>
        <p>{articleText}</p>
      </div>
      <div className="video-links">
        {videoLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
      <footer>
        <p>Powered by the Learning Platform</p>
      </footer>
      
        <button className="postbtn">
        Create A Post
        </button>
     
    </div>
  );
};

export default DataPage;


