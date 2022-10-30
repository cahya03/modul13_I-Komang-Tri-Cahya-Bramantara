import Table from "react-bootstrap/Table";

function NewReleaseBookTable() {
  return (
    <Table striped bordered hover variant>
      <thead>
        <tr>
          <th>Title</th>
          <th>Subtitle</th>
          <th>ISBN13</th>
          <th>Price</th>
          <th>Image</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Deno Succinctly</td>
          <td> </td>
          <td>9781642002140</td>
          <td>$0.00</td>
          <td><img src="https://itbook.store/img/books/9781642002140.png"></img></td>
          <td><a href="https://itbook.store/books/9781642002140">https://itbook.store/books/9781642002140</a></td>
        </tr>
        <tr>
            <td>Robotics, AI, and Humanity</td>
            <td>Science, Ethics, and Policy</td>
            <td>9783030541729</td>
            <td>59.99</td>
            <td><img src="https://itbook.store/img/books/9783030541729.png"></img></td>
            <td><a href="https://itbook.store/books/9783030541729">https://itbook.store/books/9783030541729</a></td>
        </tr>
        <tr>
            <td>Introduction to Autonomous Robots, 3rd Edition</td>
            <td> </td>
            <td>9781493773077</td>
            <td>$20.99</td>
            <td><img src="https://itbook.store/img/books/9781493773077.png"></img></td>
            <td><a href="https://itbook.store/books/9781493773077">https://itbook.store/books/9783030541729</a></td>
        </tr>
        <tr>
            <td>Learning Go</td>
            <td>An Idiomatic Approach to Real-World Go Programming</td>
            <td>9781492077213</td>
            <td>$35.88</td>
            <td><img src="https://itbook.store/img/books/9781492077213.png"></img></td>
            <td><a href="https://itbook.store/books/9781492077213">https://itbook.store/books/9783030541729</a></td>
        </tr>
        <tr>
            <td>Open Workbook of Cryptology</td>
            <td>A project-based introduction to crypto in Python</td>
            <td>1001656678502</td>
            <td>$0.00</td>
            <td><img src="https://itbook.store/img/books/1001656678502.png"></img></td>
            <td><a href="https://itbook.store/books/1001656678502">https://itbook.store/books/9783030541729</a></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default NewReleaseBookTable;
