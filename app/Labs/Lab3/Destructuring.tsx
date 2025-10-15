export default function Destructuring() {
  const person = { name: "John", age: 25 };
  const { name, age } = person;
  // const name = person.name
  // const age = person.age
  const numbers = ["one", "two", "three"];
  const [ first, second, third ] = numbers;
  return (
    <div id="wd-destructuring">
      <h2>Destructuring</h2>
      <h3>Object Destructuring</h3>
      const &#123; name, age &#125; = &#123; name: "John", age: 25 &#125;<br />
      name = &#123;name&#125;<br />
      age = &#123;age&#125;
      <h3>Array Destructuring</h3>
      const [first, second, third] = ["one", "two", "three"]<br /><br />
      first = &#123;first&#125;<br />
      second = &#123;second&#125;<br />
      third = &#123;third&#125;<br />
    </div>
  );
}
