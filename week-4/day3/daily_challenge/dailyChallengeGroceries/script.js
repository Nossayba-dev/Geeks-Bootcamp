class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time; 
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

const video1 = new Video("JavaScript Tutorial", "Alice", 300);
video1.watch(); 

const video2 = new Video("CSS Flexbox Guide", "Bob", 420);
video2.watch(); 

const videosData = [
  { title: "React Basics", uploader: "Carol", time: 600 },
  { title: "Node.js Intro", uploader: "Dave", time: 540 },
  { title: "Python for Beginners", uploader: "Eve", time: 720 },
  { title: "Data Structures", uploader: "Frank", time: 480 },
  { title: "Machine Learning 101", uploader: "Grace", time: 900 },
];

const videoInstances = videosData.map(
  video => new Video(video.title, video.uploader, video.time)
);

videoInstances.forEach(video => video.watch());
