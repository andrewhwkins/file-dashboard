import { slugify } from ".";

test("slugify returns correct slug version of value", () => {
    const slug = slugify("s1 UG%ify M$e", "_");
    expect(slug).toBe("s1_ugify_me");
});
