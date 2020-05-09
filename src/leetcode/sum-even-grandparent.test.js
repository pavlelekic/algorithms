import solution from './sum-even-grandparent';

test("Sum of Nodes with Even-Valued Grandparent", () => {
    expect(solution([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5])).toBe(18);
});
