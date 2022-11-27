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
                We believe that earth is for all the living beings. This includes all the animals, birds, insects, reptiles, and all the other living beings. They all should be treated with love and care.
                <br />
                {/*BREAK*/}
                <br />
                Upon adopting a pet, you are agreeing to the following rules and guidelines. If you do not agree to these rules, please do not adopt a pet.
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
                        You are not allowed to;<br /> • Harm the pet
                        <br /> • Abuse the pet
                        <br /> • Make the pet work for your personal gains
                        <br /> • following unrecommended diets
                    </p>
                </li>
                <li>
                    <input type="checkbox" defaultChecked />
                    <i />
                    <h2>Diet Guidelines</h2>
                    <p><b>I. Allergic foods<br /></b>
                        Do not feed your pet any food that may lead to allergic conditions to the pet. If you are unsure, please consult a vet.
                        <br />
                        <br />
                        <b>II. Bulking or starvation<br /></b>
                        Do not feed your pet more than the recommended amount of food. This may lead to obesity and other health conditions.
                        <br />
                        <br />
                        <b>III. Protien foods<br /></b>
                        Foods that are rich in protien are not recommended for pets. This may lead to health conditions.
                        <br />
                        <br />
                        <b>IV. Raw foods<br /></b>
                        Raw foods are not recommended for pets. This may lead to health conditions.
                        <br />
                        <br />
                        <b>V. Junk foods<br /></b>
                        Junk foods are not recommended for pets. This may lead to health conditions.
                        <br />
                    </p>
                </li>
                <li>
                    <input type="checkbox" defaultChecked />
                    <i />
                    <h2>Health Guidelines</h2>
                    <p><b>I. Medical checkup<br /></b>
                        The pet should be taken to a vet for a medical checkup at least once a month. This is to ensure the pet is healthy and to prevent any health conditions.
                        <br />
                        <br />
                        <b>II. Shelter<br /></b>
                        The pet should be kept in a shelter that is safe and secure with the optimal temperature and humidity suitable for the pet.
                        <br />
                        <br />
                        <b>III. Vaccination<br /></b>
                        The pet should be vaccinated as per vets instruction. This is to ensure the pet is healthy and to prevent any health conditions.
                        <br />
                        <br />
                        <b>IV. Medication<br /></b>
                        The pet should be given medication as per vets instruction. This is to ensure the pet is healthy and to prevent any health conditions.
                        <br />
                        <br />
                        <b>V. Exercise<br /></b>
                        The pet should be given exercise as per vets instruction. This is to ensure the pet is healthy and to prevent any health conditions.
                        <br />
                        <br />
                        <b>VI. Hygiene<br /></b>
                        The pet should be kept clean and hygienic. This is to ensure the pet is healthy and to prevent any health conditions.
                        <br />
                        
                    </p></li>
            </ul>
        </div>
    );
}

export default Rules;