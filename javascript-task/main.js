class TextProcess {
  constructor() {
    this.text = "";
    this.onresult = null;
  }

  start() {
    if (this.text.length <= 150) {
      this.sendToBackend(this.text);
    } else {
      console.log("Too big Text");
    }
  }

  sendToBackend(sentence) {
    console.log("Sent to backend: ", sentence);
  }
}

const cl = new TextProcess();
cl.text = "გრძელი ტექსტი დასამუშავებლად. სასვენი ნიშნებით და სხვა სიმბოლოებით.";
cl.start();
