import {deserialize, serialize} from './serialize-deserialize-bt';

test("Serialization & deserialization", () => {
    const treeStrings = [
        '1,2,3,null,null,4,5'
    ];

    treeStrings.forEach(treeString => expect(serialize(deserialize(treeString))).toBe(treeString));
});
