/** @format */


import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import axios from "axios";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "Translate",
			aliases: ["ur"],
			description: "Gives you the translation of the given word. ",
			category: "educative",
			usage: `${client.config.prefix}ur [Word you want to search about]`,
			baseXp: 50,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined) return void M.reply("Please provide a word/text to translate.");
		const term = joined.trim();
		console.log(term, joined);
		if(!learn) return void M.reply("which kanguage you want to translate the text or word to.")
		const lang = learn.trim();
		console.link(lang, learn);
		await axios
			.get(`https://www.bing.com/translator?term=${term}ref=term=&from=en&to={lang}`)
			.then((response) => {
				// console.log(response);
				const text = `📚 *Microsoft translator :* ${term}\n\n📖 *Translation :* ${response.data.list[0].translation
					.replace(/\[/g, "")
					.replace(/\]/g, "")}\n\n💬 *Example :* ${response.data.list[0].example
					.replace(/\[/g, "")
					.replace(/\]/g, "")}`;
				M.reply(text);
			})
			.catch((err) => {
				M.reply(`Sorry, if i couldn't give perfect translation related to *${term}*.`);
			});
	};
}
