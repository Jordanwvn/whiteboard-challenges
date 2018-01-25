

const list = require ('../index.js');

describe('FINDING THE Nth NODE FROM END', () => {

  let linkedList = {value: 5, next:
                     {value: 4, next:
                       {value: 3, next:
                         {value: 2, next:
                           {value: 1, next:
                             {value: 0, next: null}
                           }
                         }
                       }
                     }
                   }


  it('should return null upon being passed a non-number', () => {
    expect( list.nthFromEnd('n', linkedList) ).toEqual(null);
  });
  it('should retun null upon being passed a negative number', () => {
    expect( list.nthFromEnd(-3, linkedList) ).toEqual(null);
  });
  it('should return null if n is higher than the number of nodes in the list', () => {
    expect( list.nthFromEnd(7, linkedList) ).toEqual(null);
  });
  it('should return the correct value from the linked list', () => {
    expect( list.nthFromEnd(4, linkedList) ).toEqual(
      {value: 4, next: {value: 3, next: {value: 2, next: {value: 1, next: {value: 0, next: null}}}}}
    );
    expect( list.nthFromEnd(2, linkedList) ).toEqual({value: 2, next: {value: 1, next: {value: 0, next: null}}});
    expect( list.nthFromEnd(0, linkedList) ).toEqual({value: 0, next: null});
  });
});
