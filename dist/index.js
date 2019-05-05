"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// require('./examples/anagrams/index')
const follow_redirects_1 = require("follow-redirects");
const jsdom_1 = require("jsdom");
const fs_1 = __importDefault(require("fs"));
const result = [];
const fn = () => __awaiter(this, void 0, void 0, function* () {
    const orderedWords = [];
    const allWords = getWordsList();
    const result = [];
    for (let i = 0; i < allWords.length; i++) {
        if (i % 100 === 0) {
            orderedWords.push([]);
        }
        orderedWords[orderedWords.length - 1].push(allWords[i].replace(' ', '-'));
    }
    for (let i = 0; i < orderedWords.length; i++) {
        console.log('Waiting...');
        yield waitWor(1500);
        console.log('Requesting...');
        yield Promise.all(orderedWords[i].map(requestWord));
        console.log('Recieved');
    }
    return result;
});
const waitWor = (duration) => new Promise(resolve => setTimeout(resolve, duration));
const requestWord = (word) => {
    return new Promise((resolve, reject) => {
        follow_redirects_1.https.get(`https://dictionary.cambridge.org/us/dictionary/english/${word}`, res => {
            let htmlString = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => htmlString += chunk);
            res.on('end', () => {
                try {
                    const jsDom = new jsdom_1.JSDOM(htmlString);
                    const domNode = jsDom.window.document.querySelector('.pos-header .us .pron .ipa');
                    if (domNode) {
                        result.push({
                            word: word,
                            pron: '/' + domNode.innerHTML + '/'
                        });
                    }
                    resolve();
                }
                catch (e) {
                    throw word;
                }
            });
        }).on('error', reject).end();
    });
};
fn()
    .then(res => fs_1.default.writeFileSync('./data.json', JSON.stringify(result)))
    .catch(err => console.log(err));
function getWordsList() {
    return [
        ...require('../words/standartEnglish.js'),
        ...require('../words/mostPopular5000.js'),
        ...require('../words/globish.js')
    ].filter(uniqueFilter());
}
function uniqueFilter() {
    const counter = {};
    return (i1) => {
        if (!counter[i1]) {
            counter[i1] = true;
            return true;
        }
        return false;
    };
}
//# sourceMappingURL=index.js.map