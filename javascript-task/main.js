class TextProcess {
  constructor() {
    this.text = "";
    this.onresult = null;
    this.token = "";
  }

  async start() {
    const punctuationPriority = [".", "!", "?", ";", ",", " "];

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
          // handleBackendResponse(sourceUrl);
          this.onresult({ sourceUrl });
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.error(error);
      }
    };

    let currentIndex = 0;

    while (currentIndex < this.text.length) {
      let endIndex = currentIndex + 230;
      if (endIndex > this.text.length) {
        endIndex = this.text.length;
      }

      let slice = this.text.substring(currentIndex, endIndex);
      let lastValidIndex = endIndex - currentIndex - 1;

      if (lastValidIndex >= 150) {
        const remainingSlice = slice.substring(150);
        let cutIndex = -1;

        for (let i = 0; i < punctuationPriority.length; i++) {
          const punctuationIndex = remainingSlice.indexOf(
            punctuationPriority[i]
          );
          if (
            punctuationIndex >= 0 &&
            punctuationIndex <= lastValidIndex - 150
          ) {
            cutIndex = punctuationIndex + 150;
            break;
          }
        }

        if (cutIndex >= 0) {
          lastValidIndex = cutIndex;
          slice = slice.substring(0, cutIndex + 1);
        }
      }

      const sentence = slice.trim();
      currentIndex += lastValidIndex + 1;

      console.log("Sent text: ", sentence)

      await sendToBackend(sentence);
    }
  }
}

const cl = new TextProcess();
cl.text =
  "ოქტომბერში ისრაელის ხელისუფლებამ მწვანე პასპორტები გააუქმა მათთვის, ვინც ექვს თვეზე მეტი ხნის წინ ორჯერადად აიცრა. ახლა უკვე ეს დოკუმენტი მხოლოდ ბუსტერ დოზის შემდეგ გაიცემა. საჯარო ღონისძიებებზე დასასწრებად და სხვა თავშეყრის ადგილებში შესასვლელად.";

cl.token = ""; // აქ ჩასვავთ ავტორიზაციის ტოკენს

cl.onresult = function (result) {
  const MyResult = result.sourceUrl;

  console.log(MyResult);
};

cl.start();
