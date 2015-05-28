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
});
