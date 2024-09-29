function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        // Calculate the area formed by the lines at left and right
        let width = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let area = currentHeight * width;
        
        // Update the maximum water if the current area is larger
        maxWater = Math.max(maxWater, area);
        
        // Move the pointer that points to the smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}