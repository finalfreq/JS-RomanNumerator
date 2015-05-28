describe('count', function() {
  it('translates 1 to roman numerals', function (){
    expect(roman(1)).to.equal('I')
  });
  it('translates 2 to roman numerals', function (){
    expect(roman(2)).to.equal('II')
  });
});
