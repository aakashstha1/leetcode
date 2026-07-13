/**
 * Find the kth largest element using Quick Select
 * with 3-way partitioning (Dutch National Flag).
 */
var findKthLargest = function(nums, k) {
    // Convert kth largest to target index
    // Example: k = 4 => target index = 3
    let target = k - 1;

    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {

        // Choose a random pivot to avoid worst-case partitions
        let randomIndex =
            l + Math.floor(Math.random() * (r - l + 1));

        // Move pivot to the end
        [nums[r], nums[randomIndex]] =
            [nums[randomIndex], nums[r]];

        // Partition into:
        // > pivot | == pivot | < pivot
        let [lt, gt] = partition(nums, l, r);

        // If target lies in the equal region,
        // we've found the answer
        if (target >= lt && target <= gt) {
            return nums[target];
        }

        // Search left side (> pivot region)
        else if (target < lt) {
            r = lt - 1;
        }

        // Search right side (< pivot region)
        else {
            l = gt + 1;
        }
    }
};

function partition(nums, l, r) {
    let pivot = nums[r];

    // lt: start of equal region
    let lt = l;

    // current element being processed
    let i = l;

    // gt: end of equal region
    let gt = r;

    while (i <= gt) {

        // Move larger elements to the left
        if (nums[i] > pivot) {
            [nums[i], nums[lt]] =
                [nums[lt], nums[i]];

            lt++;
            i++;
        }

        // Move smaller elements to the right
        else if (nums[i] < pivot) {
            [nums[i], nums[gt]] =
                [nums[gt], nums[i]];

            gt--;

            // Don't increment i here.
            // The swapped element needs inspection.
        }

        // Equal to pivot
        else {
            i++;
        }
    }

    // Return boundaries of equal region
    return [lt, gt];
}

console.log(findKthLargest([3,2,1,5,6,4], 4));