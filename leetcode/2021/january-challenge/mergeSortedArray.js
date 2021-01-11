const merge = (nums1, m, nums2, n) => {
  n--;

  let end = m + n;
  let x = m - 1;

  while (n >= 0 && x >= 0) {
    if (nums2[n] > nums1[x]) {
      nums1[end] = nums2[n--];
    } else {
      [nums1[end], nums1[x]] = [nums1[x], 0];
      x--;
    }

    end--;
  }

  while (n >= 0) {
    nums1[end--] = nums2[n--];
  }
};
