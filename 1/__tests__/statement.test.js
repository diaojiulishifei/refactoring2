const fs = require('fs');
const path = require('path');

const { statement } = require('../statement');

test('example statement', () => {
  const invoice = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/invoice.json')),
    'utf8'
  );
  const plays = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/plays.json'), 'utf8')
  );
  const statement_string = statement(invoice, plays);
  expect(statement_string).toMatchSnapshot();
});

test('statement with new play types', () => {
  const invoice = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, '../data/invoice_new_plays.json'),
      'utf8'
    )
  );
  const plays = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/new_plays.json'), 'utf8')
  );
  expect(() => {
    statement(invoice, plays);
  }).toThrow(/unknown type/);
});
