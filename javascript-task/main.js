class TextProcess {
  constructor() {
    this.text = "";
    this.onresult = null;
    this.token = "";
  }

  start() {
    const punctuationMarks = [".", "!", "?", ";", ",", " "];

    const findLastValidIndex = (textSlice, maxLength) => {
      for (let i = maxLength; i >= 0; i--) {
        if (
          textSlice[i] === undefined ||
          punctuationMarks.includes(textSlice[i])
        ) {
          return i;
        }
      }
      return maxLength;
    };

    const sendToBackend = async (sentence) => {
      const model = {
        Language: "ka",
        Text: sentence,
        Voice: 0,
        IterationCount: 2,
      };

      try {
        const response = await fetch(
          "https://enagramm.com/API/TTS/SynthesizeTextAudioPath",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify(model),
          }
        );

        if (response.ok) {
          const result = await response.json();
          const sourceUrl = result.AudioFilePath;
          handleBackendResponse(sourceUrl);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const handleBackendResponse = (sourceUrl) => {
      if (this.onresult) {
        this.onresult({ sourceUrl });
      }
    };

    while (this.text.length > 0) {
      const endIndex = Math.min(this.text.length, 230);
      const slice = this.text.substring(0, endIndex);
      const lastValidIndex = findLastValidIndex(slice, 80);

      const sentence = this.text.substring(0, lastValidIndex + 1);
      sendToBackend(sentence);

      this.text = this.text.substring(lastValidIndex + 1).trim();
    }
  }
}

const cl = new TextProcess();
cl.text =
  "გრძელი ტექსტი დასამუშავებლად. სასვენი ნიშნებით და სხვა სიმბოლოებით.გრძელი ტექსტი დასამუშავებლად. სასვენი ნიშნებით და სხვა სიმბოლოებით. ასევე დავამატე სხვადასხვა სიმბოლოები, ყოჩაღთ ძალიან მომეწონა ყველაფერი, მოლოდინებს გადააჭარბა.";

cl.token = "" // აქ ჩასვავთ ავტორიზაციის ტოკენს

cl.onresult = function (result) {
  // console.log("Sent to backend: ", sentence);
  const MyResult = result.sourceUrl;

  console.log(MyResult);
};

cl.start();
