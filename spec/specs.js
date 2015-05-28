describe('count', function() {
  it('translates 1 to roman numerals', function (){
    expect(roman(1)).to.equal('I')
  });
  it('translates 2 to roman numerals', function (){
    expect(roman(2)).to.equal('II')
  });
  it('translates 4 to roman numerals', function (){
    expect(roman(4)).to.equal('IV')
  });
  it('translates 5 to roman numerals', function (){
    expect(roman(5)).to.equal('V')
  });
  it('translates 7 to roman numerals', function (){
    expect(roman(7)).to.equal('VII')
  });
  it('translates 9 to roman numerals', function (){
    expect(roman(9)).to.equal('IX')
  });
  it('translates 10 to roman numerals', function (){
    expect(roman(10)).to.equal('X')
  });
  it('translates 13 to roman numerals', function (){
    expect(roman(13)).to.equal('XIII')
  });
  it('translates 14 to roman numerals', function (){
    expect(roman(14)).to.equal('XIV')
  });
  it('translates 39 to roman numerals', function (){
    expect(roman(39)).to.equal('XXXIX')
  });
  it('translates 40 to roman numerals', function (){
    expect(roman(40)).to.equal('XL')
  });
  it('translates 49 to roman numerals', function (){
    expect(roman(49)).to.equal('XLIX')
  });
  it('translates 50 to roman numerals', function (){
    expect(roman(50)).to.equal('L')
  });
  it('translates 89 to roman numerals', function (){
    expect(roman(89)).to.equal('LXXXIX')
  });
  it('translates 90 to roman numerals', function (){
    expect(roman(90)).to.equal('XC')
  });
  it('translates 99 to roman numerals', function (){
    expect(roman(99)).to.equal('XCIX')
  });
  it('translates 100 to roman numerals', function (){
    expect(roman(100)).to.equal('C')
  });
  it('translates 399 to roman numerals', function (){
    expect(roman(399)).to.equal('CCCXCIX')
  });
  it('translates 400 to roman numerals', function (){
    expect(roman(400)).to.equal('CD')
  });
  it('translates 400 to roman numerals', function (){
    expect(roman(400)).to.equal('CD')
  });
  it('translates 499 to roman numerals', function (){
    expect(roman(499)).to.equal('CDXCIX')
  });
  it('translates 500 to roman numerals', function (){
    expect(roman(500)).to.equal('D')
  });
  it('translates 899 to roman numerals', function (){
    expect(roman(899)).to.equal('DCCCXCIX')
  });
});
