/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "gojo",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}yotsuba`,
			baseXp: 30,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/z6GMGNV3teMAAAPo/darling-in-the-franxx-zero-two.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `⚡️ *Gojo Bot* ⚡️\n\n🍀 *Description: A WhatsApp Bot With advanced features developed and hosted by Fantox & stuti.*\n\n🌐 *Fantox's GitHub URL: https://github.com/FantoX001* \n\n *Stuti's GitHub URL: https://github.com/kimstuti123* \n\n 👾 *Tour Bot's URL:https://github.com/FantoX001/Zero-Two* \n\n 📒  *Guide: https://github.com/FantoX001/Zero-Two-Guides* \n\n`,
			}
		);
	};
}
