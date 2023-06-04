import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import fs from 'fs';

async function displayFileContent(fileName) {
    try {
      const content = await fs.promises.readFile(fileName, 'utf-8');
  
      const glitchAnimation = chalkAnimation.pulse(content);
      glitchAnimation.start();
  
      await sleep(5000);
      glitchAnimation.stop();
  
      console.log(chalk.green('\nDateiinhalt:'));
      console.log(content);
    } catch (error) {
      console.error(chalk.red('Fehler beim Lesen der Datei:'), error);
    }
  }
const fileName = 'test.txt';
displayFileContent(fileName);


const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        "Willkommen im Spider-Verse! \n"
    );

    await sleep();
    rainbowTitle;
    await sleep();

    console.log(`
        Sorge dafür dass die ${chalk.red("Canon-Events")} nicht gestört werden!
        Wenn ein Canon-Events nicht eintrifft wäre das ${chalk.red("KATASTROPHAL!")}
        `);
    
    const kolabiern = chalkAnimation.glitch(
        "Das Universum würde KOLABIEREN! \n"
    );
    await sleep();
    console.log(`
        ${kolabiern}
        Also pass auf!
        `)
}

await welcome();

async function askName() {
    const answers = await inquirer.prombt({
        name: "playerName",
        type: "input",
        message: "Wie ist dein Name, mein Spinnen-Freund?",

    });
}