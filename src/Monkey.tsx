import { Factories as Create } from "./Factories";

export const Monkey = {
  basic: Create.basic("Sun Wukong", "Great Sage Equal to Heaven", ""),
  contact: Create.contact(
    "108-0999-8181",
    "GreatSage@FFMtn.net",
    "Flower Fruit Mountain",
    "https://en.wikipedia.org/wiki/Wu_Cheng%27en",
    "https://github.com/bookmachine/journey-to-the-west",
    "https://en.wikipedia.org/wiki/Monkey_King",
    "LinkedIn",
    "Github",
    "Portfolio"
  ),
  edu: [
    Create.edu("Five Phases Mountain", "Dharma Initiate", "127 CE", "627 CE"),
    Create.edu(
      "Mountain of Heart and Mind",
      "Immortal Sage",
      "110 CE",
      "120 CE"
    ),
  ],
  work: [
    Create.work(
      "Disciple of Tripitaka",
      "Dharma Protector",
      "627 CE",
      "633 CE",
      "",
      [
        "Defended the monk Tripitaka on his quest to obtain the true sutras by recommendation of Guanyin",
        "Overcame 81 tribulations over the course of a 108,000 li journey",
        "Defeated countless demons and spirits as part of client's security detail",
      ]
    ),
    Create.work("Heaven", "Heavenly Immortal", "125 CE", "127 CE", "", [
      "Assigned postings in Heaven by personal invitation from the Jade Emperor and Gold Star of Venus",
      "Served with distinction as Protector of Horses and Guardian of the Heavenly Peach Garden",
      "Tested the might of Heaven's top generals and 10,000-strong army",
    ]),
    Create.work(
      "Flower Fruit Mountain",
      "Handsome Monkey King",
      "100 CE",
      "633 CE",
      "",
      [
        "Defeated Demon King of Confusion to rescue subjects and acquire strategic treasury assets",
        "Signed Seven Sages alliance pact with neighbouring beast kings",
        "Negotiated with Kings of Hell to decrease kingdom mortality rate by 100%",
      ]
    ),
  ],
  achievements: [
    Create.achieve(
      "Diplomatic Mission to Dragon Palace",
      "125 CE",
      "Received gifts of golden mail, phoenix cap, cloud-walking boots, and Ruyi Jingu Bang from Ao Guang, Dragon King of the East upon initiating cordial relations as fellow sovereigns"
    ),
    Create.achieve(
      "Havoc in the Heavens",
      "127 CE",
      "Granted right to cultivate in Laozi's immortal cauldron of samadhi flames for besting Heaven's top generals, gaining golden fiery eyes and iron body"
    ),
    Create.achieve(
      "Obtained True Sutras",
      "633 CE",
      "Attained Buddhahood as the Victorious Fighting Buddha upon reaching the Western Paradise"
    ),
  ],
  skills: Create.skill([
    "Cloud Somersaulting",
    "72 Transformations",
    "Staff Combat - Ruyi Jingu Bang",
    "Fiery Eyes of True Perception",
    "Sixfold Immortality",
    "Gold-Forged Iron Body",
    "Magic Hair Transformations",
  ]),
};
