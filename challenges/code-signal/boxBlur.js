/* Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down. */

module.exports = (image) => {
    const answer = []
    let y = 1

    while(y < image.length - 1) {
        answer.push([])

        for(let x = 1; x < image[0].length - 1; x++) {
            const sum = image[y - 1][x - 1] + image[y - 1][x] + image[y - 1][x + 1] + image[y][x - 1] + image[y][x] + image[y][x + 1] + image[y + 1][x - 1] + image[y + 1][x] + image[y + 1][x + 1]
            const average = sum / 9
            answer[y - 1].push(Math.floor(average))
        }

        y++
    }

    return answer
}