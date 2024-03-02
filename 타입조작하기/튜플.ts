type Tup = [number, string, boolean];

type Tup0 = Tup[0];
// number

type Tup1 = Tup[1];
// string

type Tup2 = Tup[2];
// boolean
// type Tup3 = Tup[3];

type Tup4 = Tup[number];
// number | string | boolean
//모든 타입의 최적의 공통타입을 뽑아온다.
// 복잡하고 큰 타입에서 필요한것만 쏙쏙 뽑아올 수 있어서 실무에서 잘 쓴다.
