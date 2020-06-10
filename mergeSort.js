let Merge = (A, p, q, r) => {
  let n1 = q - p + 1, n2 = r - q;
  let L = new Array(n1 + 1), R = new Array(n2 + 1);
  for(let i = 1; i <= n1; i++) {
    L[i] = A[p + i - 1];
  }
  for(let j = 1; j <= n2; j++) {
    R[j] = A[q + j];
  }
  L[n1 + 1] = Infinity;
  R[n2 + 1] = Infinity;

  let i = 1, j = 1;
  for(let k = p; k <= r; k++) {
    if(L[i] <= R[j]) {
      A[k] = L[i];
      i++;
    }
    else {
      A[k] = R[j];
      j++;
    }
  }
}

let MergeSort = (A, p, r) => {
  let q;
  if(p < r) {
    q = Math.floor((p + r) / 2);
    MergeSort(A, p, q);
    MergeSort(A, q + 1, r);
    Merge(A, p, q, r);
  }
}

let getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);


let A = [];
const N = 8;

for (let i = 0; i < N; i++) {
  A[i] = getRandom(1, 30);
}

MergeSort(A, 0, N - 1);
console.log(A);
