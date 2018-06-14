import FakeRandomData from 'fake-random-data';

const setData = ( schema, len = 20 ) => {
  const fake = new FakeRandomData();
  const fakeArr = [];
  let idx = 0;

  for ( ; len > idx; idx++ ) {
    fakeArr.push( fake.create( schema ) );
  }

  return fakeArr;
};

export default setData;
