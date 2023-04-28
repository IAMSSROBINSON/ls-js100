// What value does the following expression evaluate to?

// 'foo' === 'Foo'

// This will evaluate to false as two strings are being compared using string equality which will take into consideration both the value (which differs by a letter casing) and data type (of which both are strings). One evaluation is false (whereas both will need to be true to return true) so false is returned as the value of the expression.

console.log('foo' === 'Foo'); // false