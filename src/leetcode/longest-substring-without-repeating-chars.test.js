import sol from './longest-substring-without-repeating-chars';

test("Longest Substring Without Repeating Characters", () => {
    expect(sol("abcabcbb")).toBe(3);
    expect(sol("bbbbb")).toBe(1);
    expect(sol("pwwkew")).toBe(3);
});
