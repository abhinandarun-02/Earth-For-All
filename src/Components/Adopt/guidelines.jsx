import './guidelines.css';
const Rules = () => {
    return (
        <div className="rules px-[20%] py-[100px]">
            {/*****************
Centered Title
Tags used:
      <center>
      <h1>
******************/}
            <center>
                <h1>
                    <b>
                        Rulebooks and Guidelines
                    </b>
                </h1>
            </center>
            {/*****************
Welcome Text
Tags used:
      <p>    | Paragraph Tag.
      <a>    | Link Tag. 
      <i>    | Italics.
      <br>   | Breaks up text.
******************/}
            <p>
                We believe everyone should be welcomed, every point of view should be given a chance. We welcome debate, as long as it is done peacefully and respectfully; any point of view is welcomed. Respect is imperative, everyone is equal here. Discussion must be kept civil, feel free to express yourself as long as you do it calmly.
                <br />
                {/*BREAK*/}
                <br />
                Upon registration to
                “<a href="www.nasclub.co" className="ewlink"><i>www.nasclub.co</i></a>”
                you agree to following these rules/guidelines. Staff can and will use their own judgement when deciding on which warning/punishment is best suited to any given user.
                <br />
                {/*BREAK*/}
                <br />
                We reserve the right to change or modify these rules at any given time with or without reason. We also reserve the right to remove you from our website without warning and/or reason, however, a reason will generally be provided and you may ask for one if you are concerned.
            </p>
            {/*****************
Sectional Paragraphs
Tags used:
      <ul>    | Unordered List.
      <li>    | List Item. 
      <input> | Input box.
      <h2>    | Heading size 2.
      <p>     | Paragraph Tag.
      <br>    | Break.
******************/}
            <ul>
                <li>
                    <input type="checkbox" defaultChecked />
                    <i />
                    <h2>General Rulebooks</h2>
                    <p>
                        You are not allowed to;<br /> • Continually and aggressively insult or stalk other users.
                        <br /> • Post personally identifiable information (i.e. name, address, email, phone number, etc.), without prior consent.
                        <br /> • Like or post boost.
                        <br /> • Derail a thread's topic.
                        <br /> • Post links to inappropriate sites.
                        <br /> • Post spam (i.e. +1, rickrolls, repeated content) or Re-post Closed, Modified, Deleted Content.
                        <br /> • Triple post.
                        <br /> • Abuse glitches
                    </p>
                </li>
                <li>
                    <input type="checkbox" defaultChecked />
                    <i />
                    <h2>Forum Guidelines</h2>
                    <p><b>I. Arguments with Moderators<br /></b>
                        You are not allowed to openly argue with a moderator about punishments. Contact the Moderator via a private message. These situations should be dealt with privately.
                        <br />
                        <br />
                        <b>II. Forum Accounts<br /></b>
                        You are not allowed to share your account. Forum accounts are intended for the use by one person. You are not allowed to create backup accounts for the purpose of posting in our debate forums, in the event of your main being banned.
                        <br />
                        <br />
                        <b>III. Remain on Topic<br /></b>
                        Threads should remain on the topic that they are discussing, they should not be discussing other topics. A new thread should be made for a new discussion. Please do understand we are lenient upon this rule however if the topics gets majorly derailed we will take action.
                        <br />
                        <br />
                        <b>IV. Inappropriate content<br /></b>
                        Threads containing pornography, illegal content will be removed and the user banned. Racial, sexual, or any other form of discrimination is currently not tolerated. We are lenient depending upon the mannerism of discussion.
                        <br />
                        <br />
                        <b>V. Flame or Provoke<br /></b>
                        Do not continually and aggressively insult or flame other members of the forum. Similarly, do not post with the intention of provoking a reaction from fellow members. This includes encouraging flame wars.
                        <br />
                        <br />
                        <b>V. Topic Setting<br /></b>
                        The opening post of a thread sets the topic and the tone of the discussion. It should contain a member's opinions or questions with sufficient elaboration to establish a foundation for respectful discussion and debate. Images, links, quotations, etc., should be used to support a member's opinion, not to replace it.
                        <br />
                        <br />
                        <b>VI. Topic Duplication<br /></b>
                        Threads should not be posted in the wrong forum, or be duplicates of other threads and/or topics (creating multiple threads with fundamentally the same topic is not allowed, unless otherwise stated by a staff member).
                        <br />
                        <br />
                        <b>VII. Private Messaging<br /></b>
                        Publicly post or otherwise share PMs with other users unless you have the expressed permission of the sender to do so. Private Messages are intended to be just that - private.</p>
                </li>
                <li>
                    <input type="checkbox" defaultChecked />
                    <i />
                    <h2>Chat Guidelines</h2>
                    <p><b>I. Arguments with Moderators<br /></b>
                        You are not allowed to openly argue with a moderator about punishments. Contact the Moderator via a private message. These situations should be dealt with privately.
                        <br />
                        <br />
                        <b>II. Doxing<br /></b>
                        You are not allowed to post personally identifiable information (i.e. name, address, email, phone number, etc.), without prior consent.
                        <br />
                        <br />
                        <b>III. Spamming<br /></b>
                        You are not allowed to post similar or the same messages repeatidly in Nasclub Chat. We're currently cracking down on spamming, doing so will result in a one month ban.
                        <br />
                        <br />
                        <b>IV. Inappropriate content<br /></b>
                        You are not allowed to post links containing pornography, illegal content. Racial, sexual, or any other form of discrimination is currently not tolerated.
                        <br />
                    </p></li>
            </ul>
        </div>
    );
}

export default Rules;