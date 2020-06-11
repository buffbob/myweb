const btn = document.querySelector("button");
const in1 = document.querySelector("#in1");
const in2 = document.querySelector("#in2");
const in3 = document.querySelector("#in3");
const in4 = document.querySelector("#in4");

const out = document.querySelector("p"); // use to alert of validation errrors
//out.textContent = "fred";


btn.onclick = run;

// lets define a new function to replace anonymous function above
async function run() {
    const temp1 = in1.value;
    const temp2 = in2.value;
    const temp3 = in3.value;
    const temp4 = in4.value;
    const arr = [temp1, temp2, temp3, temp4];

    if (temp4 && temp3 && temp2 && temp1) {
        // these are floats ready for computation
        let a = parseFloat(temp1);
        let b = parseFloat(temp2);
        let c = parseFloat(temp3);
        let d = parseFloat(temp4);
        let outString = "[" + a + ", " + b + ", " + c + ", " + d + "]";
        out.textContent = outString;
         const csvUrl = "/static/iris.csv";
        const trainingData = tf.data.csv(csvUrl, {
        columnConfigs: {
            species: {
                isLabel: true
            }
        }
    });
        // out.textContent =(await trainingData.columnNames());
        const numOfFeatures = (await trainingData.columnNames()).length - 1;
        const numOfSamples = 150;
        const convertedData =
              trainingData.map(({xs, ys}) => {
                  const labels = [
                        ys.species == "setosa" ? 1 : 0,
                        ys.species == "virginica" ? 1 : 0,
                        ys.species == "versicolor" ? 1 : 0
                  ]
                  return{ xs: Object.values(xs), ys: Object.values(labels)};
              }).batch(10);

        const model = tf.sequential();
        model.add(tf.layers.dense({inputShape: [numOfFeatures], activation: "sigmoid", units: 5}))
        model.add(tf.layers.dense({activation: "softmax", units: 3}));

        model.compile({loss: "categoricalCrossentropy", optimizer: tf.train.adam(0.06)});

        await model.fitDataset(convertedData,
                         {epochs:100,
                          callbacks:{
                              onEpochEnd: async(epoch, logs) =>{
                                  console.log("Epoch: " + epoch + " Loss: " + logs.loss);
                              }
                          }});

                // Test Cases:

                // Setosa
        //const testVal = tf.tensor2d([4.4, 2.9, 1.4, 0.2], [1, 4]);

        // Versicolor
        // const testVal = tf.tensor2d([6.4, 3.2, 4.5, 1.5], [1, 4]);

        // Virginica
        // const testVal = tf.tensor2d([5.8,2.7,5.1,1.9], [1, 4]);


        const testVal = tf.tensor2d([a, b, c, d], [1, 4]);

        const prediction = model.predict(testVal);
        const pIndex = tf.argMax(prediction, axis=1).dataSync();

        const classNames = ["Setosa", "Virginica", "Versicolor"];

        // alert(prediction)
        alert(classNames[pIndex])
        const div = document.querySelector("#explain");
        div.textContent = "cant pass the model around yet so ran the fit" +
        " and predict in the same method. Try to improve as I learn more."



    }else {
        out.textContent = "please fill in all the inputs";
    }


  }
