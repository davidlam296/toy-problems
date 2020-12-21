const fs = require('fs');

let TILE_COUNT = 0;

const tiles = fs
  .readFileSync(__dirname + '/20.txt', 'utf8')
  .split('\n\n')
  .reduce((tiles, tile) => {
    tile = tile.split('\n');
    const tileID = tile.shift().slice(5, 9);

    TILE_COUNT++;
    tiles[tileID] = { tile };
    tiles[tileID].edges = [];

    const sides = [tile[0], tile[tile.length - 1]];
    let [left, right] = ['', ''];

    for (let row = 0; row < tile.length; row++) {
      left += tile[row][0];
      right += tile[row][tile[0].length - 1];
    }

    sides.push(left, right);

    for (let i = 0; i < 4; i++) {
      sides.push(sides[i].split('').reverse().join(''));
    }

    tiles[tileID].allSides = {
      top: sides[0],
      bottom: sides[1],
      left: sides[2],
      right: sides[3],
      topR: sides[4],
      bottomR: sides[5],
      leftR: sides[6],
      rightR: sides[7],
    };

    tiles[tileID].sides = new Set(sides);
    tiles[tileID].allEdges = {};

    return tiles;
  }, {});

// Jurassic Jigsaw

const findEdges = (tileID) => {
  for (const direction in tiles[tileID].allSides) {
    const side = tiles[tileID].allSides[direction];

    for (const tid in tiles) {
      if (tid === tileID) continue;
      if (tiles[tileID].edges.includes(tid)) continue;

      if (tiles[tid].sides.has(side)) {
        tiles[tileID].edges.push(tid);
        tiles[tileID].allEdges[tid] = direction;
        break;
      }
    }
  }
};

const buildImage = (edges, size) => {
  const image = new Array(size).fill(0).map((row) => new Array(size).fill(0));
  const twos = edges['2'].ids.slice();
  const threes = edges['3'].ids.slice();
  const fours = edges['4'].ids.slice();

  const isConnected = (tile1, tile2) => {
    return tiles[tile2].edges.includes(tile1);
  };

  const buildLayer = (layer) => {
    const END = size - layer;
    const START = layer;

    // For odd sized image there is only one tile left
    if (END - START === 1) {
      image[START][START] = fours.pop();
    } else {
      // Corner & Border Tiles
      if (START === 0) {
        // Top Left --> Top Right
        for (let col = 0; col < END; col++) {
          if (col === 0) image[0][col] = twos.pop();
          else if (col === END - 1) {
            for (let i = 0; i < twos.length; i++) {
              const id = twos[i];

              if (isConnected(image[0][col - 1], id)) {
                twos.splice(i, 1);
                image[0][col] = id;
              }
            }

            break;
          } else {
            for (let i = 0; i < threes.length; i++) {
              const id = threes[i];

              if (isConnected(image[0][col - 1], id)) {
                threes.splice(i, 1);
                image[0][col] = id;
              }
            }
          }
        }
        // Top Right --> Bottom Right
        for (let row = 1; row < END; row++) {
          if (row === END - 1) {
            for (let i = 0; i < twos.length; i++) {
              const id = twos[i];

              if (isConnected(image[row - 1][END - 1], id)) {
                twos.splice(i, 1);
                image[row][END - 1] = id;
              }
            }
          } else {
            for (let i = 0; i < threes.length; i++) {
              const id = threes[i];

              if (isConnected(image[row - 1][END - 1], id)) {
                threes.splice(i, 1);
                image[row][END - 1] = id;
              }
            }
          }
        }

        // Bottom Right --> Bottom Left
        for (let col = END - 2; col >= 0; col--) {
          // Last corner piece
          if (col === 0) image[END - 1][0] = twos.pop();
          else {
            for (let i = 0; i < threes.length; i++) {
              const id = threes[i];

              if (isConnected(image[END - 1][col + 1], id)) {
                threes.splice(i, 1);
                image[END - 1][col] = id;
              }
            }
          }
        }

        // Bottom Left --> Top Left
        for (let row = END - 2; row >= 1; row--) {
          for (let i = 0; i < threes.length; i++) {
            const id = threes[i];

            if (isConnected(image[row + 1][0], id)) {
              threes.splice(i, 1);
              image[row][0] = id;
            }
          }
        }
      } else {
        // Inner tiles

        // Top Left --> Top Right: row === START
        for (let col = START; col < END; col++) {
          for (let i = 0; i < fours.length; i++) {
            const id = fours[i];

            // Check tile above and tile to the left
            if (
              isConnected(image[START - 1][col], id) &&
              isConnected(image[START][col - 1], id)
            ) {
              fours.splice(i, 1);
              image[START][col] = id;
            }
          }
        }

        // Top Right --> Bottom Right: col === END - 1
        for (row = START; row < END; row++) {
          for (let i = 0; i < fours.length; i++) {
            const id = fours[i];

            // Check tile above and tile to the right
            if (
              isConnected(image[row][END], id) &&
              isConnected(image[row - 1][END - 1], id)
            ) {
              fours.splice(i, 1);
              image[row][END - 1] = id;
            }
          }
        }

        // Bottom Right --> Bottom Left: row === END - 1
        for (col = END - 1; col >= START; col--) {
          for (let i = 0; i < fours.length; i++) {
            const id = fours[i];

            // Check tile below and tile to the right
            if (
              isConnected(image[END - 1][col + 1], id) &&
              isConnected(image[END][col], id)
            ) {
              fours.splice(i, 1);
              image[END - 1][col] = id;
            }
          }
        }

        // Bottom Left --> Top Left: col === START
        for (row = END - 1; row >= START; row--) {
          for (let i = 0; i < fours.length; i++) {
            const id = fours[i];

            // Check tile below and tile to the left
            if (
              isConnected(image[row + 1][START], id) &&
              isConnected(image[row][START - 1], id)
            ) {
              fours.splice(i, 1);
              image[row][START] = id;
            }
          }
        }
      }
    }
  };

  let currLayer = 0;

  while (currLayer < size) {
    buildLayer(currLayer);
    currLayer++;
  }

  // For each piece rotate/flip images till they are in the right direction

  const positionTiles = (image) => {
    const imageCopy = new Array(image.length)
      .fill(0)
      .map((row) => new Array(image.length));
    const START = 0;
    const END = size - 1;

    // Bottom Right Corner

    const [BR_ID, BR_TILE, BR_LEFT, BR_TOP] = [
      image[END][END],
      tiles[image[END][END]].tile,
      image[END][END - 1],
      image[END - 1][END],
    ];
    const [BRL_LOC, BRT_LOC] = [
      tiles[BR_ID].allEdges[BR_LEFT],
      tiles[BR_ID].allEdges[BR_TOP],
    ];

    if (BRL_LOC === 'right') {
      if (BRT_LOC === 'top') imageCopy[END][END] = rotate(flip(BR_TILE), 2);
      else imageCopy[END][END] = rotate(BR_TILE, 2);
    } else if (BRL_LOC === 'left') {
      if (BRT_LOC === 'bottom') imageCopy[END][END] = flip(BR_TILE, true);
      else imageCopy[END][END] = BR_TILE;
    } else if (BRL_LOC === 'top') {
      if (BRT_LOC === 'right') imageCopy[END][END] = rotate(BR_TILE, 3);
      else imageCopy[END][END] = flip(rotate(BR_TILE, 1));
    } else if (BRL_LOC === 'bottom') {
      if (BRT_LOC === 'left') imageCopy[END][END] = rotate(BR_TILE, 1);
      else imageCopy[END][END] = rotate(flip(BR_TILE), 1);
    }

    // Bottom row: row === END

    for (let col = START; col < END; col++) {
      const [br_id, br_tile, br_right, br_top] = [
        image[END][col],
        tiles[image[END][col]].tile,
        image[END][col + 1],
        image[END - 1][col],
      ];

      const [brr_loc, brt_loc] = [
        tiles[br_id].allEdges[br_right],
        tiles[br_id].allEdges[br_top],
      ];

      if (brr_loc === 'right') {
        if (brt_loc === 'top') imageCopy[END][col] = br_tile;
        else imageCopy[END][col] = flip(br_tile, true);
      } else if (brr_loc === 'left') {
        if (brt_loc === 'bottom') imageCopy[END][col] = rotate(br_tile, 2);
        else imageCopy[END][col] = flip(br_tile);
      } else if (brr_loc === 'top') {
        if (brt_loc === 'right') imageCopy[END][col] = rotate(flip(br_tile), 1);
        else imageCopy[END][col] = rotate(br_tile, 1);
      } else if (brr_loc === 'bottom') {
        if (brt_loc === 'left') imageCopy[END][col] = flip(rotate(br_tile, 1));
        else imageCopy[END][col] = rotate(br_tile, 3);
      }
    }

    // Rightmost column: col === END

    for (let row = START; row < END; row++) {
      const [rc_id, rc_tile, rc_left, rc_bottom] = [
        image[row][END],
        tiles[image[row][END]].tile,
        image[row][END - 1],
        image[row + 1][END],
      ];
      const [rcl_loc, rcb_loc] = [
        tiles[rc_id].allEdges[rc_left],
        tiles[rc_id].allEdges[rc_bottom],
      ];

      if (rcl_loc === 'right') {
        if (rcb_loc === 'top') imageCopy[row][END] = rotate(rc_tile, 2);
        else imageCopy[row][END] = rotate(flip(rc_tile), 2);
      } else if (rcl_loc === 'left') {
        if (rcb_loc === 'bottom') imageCopy[row][END] = rc_tile;
        else imageCopy[row][END] = flip(rc_tile, true);
      } else if (rcl_loc === 'top') {
        if (rcb_loc === 'right') imageCopy[row][END] = flip(rotate(rc_tile, 1));
        else imageCopy[row][END] = rotate(rc_tile, 3);
      } else if (rcl_loc === 'bottom') {
        if (rcb_loc === 'left') imageCopy[row][END] = rotate(flip(rc_tile), 1);
        else imageCopy[row][END] = rotate(rc_tile, 1);
      }
    }

    for (let row = START; row < END; row++) {
      for (let col = START; col < END; col++) {
        const [t_id, t_tile, t_right, t_bottom] = [
          image[row][col],
          tiles[image[row][col]].tile,
          image[row][col + 1],
          image[row + 1][col],
        ];
        const [tr_loc, tb_loc] = [
          tiles[t_id].allEdges[t_right],
          tiles[t_id].allEdges[t_bottom],
        ];

        if (tr_loc === 'right') {
          if (tb_loc === 'top') imageCopy[row][col] = flip(t_tile, true);
          else imageCopy[row][col] = t_tile;
        } else if (tr_loc === 'left') {
          if (tb_loc === 'bottom') imageCopy[row][col] = flip(t_tile);
          else imageCopy[row][col] = rotate(t_tile, 2);
        } else if (tr_loc === 'top') {
          if (tb_loc === 'right') imageCopy[row][col] = rotate(t_tile, 1);
          else imageCopy[row][col] = rotate(flip(t_tile), 1);
        } else if (tr_loc === 'bottom') {
          if (tb_loc === 'left') imageCopy[row][col] = rotate(t_tile, 3);
          else imageCopy[row][col] = flip(rotate(t_tile, 1));
        }
      }
    }

    return imageCopy;
  };

  return positionTiles(image);
};

const rotate = (matrix, rotateCount) => {
  rotateCount = rotateCount % 4;

  if (rotateCount === 0)
    return matrix.map((row) => (typeof row === 'string' ? row : row.join('')));

  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  const copy = new Array(ROWS).fill(0).map((row) => []);

  for (let col = 0; col < COLS; col++) {
    for (let row = ROWS - 1; row >= 0; row--) {
      copy[col].push(matrix[row][col]);
    }
  }

  return rotate(copy, rotateCount - 1);
};

const flip = (tile, vertical) => {
  if (vertical) {
    return tile.map((row) => row).reverse();
  } else {
    const copy = new Array(tile.length).fill(0).map((row) => []);

    for (let row = 0; row < tile.length; row++) {
      for (let col = tile[0].length - 1; col >= 0; col--) {
        copy[row].push(tile[row][col]);
      }
    }

    return copy.map((row) => row.join(''));
  }
};

const trimBorder = (tile) => {
  return tile
    .reduce((copy, row, idx) => {
      if (idx !== 0 && idx !== tile.length - 1) copy.push(row);
      return copy;
    }, [])
    .map((row) => row.slice(1, row.length - 1));
};

const findLochNess = (image) => {
  /* Sea Monster:
                    #
  #....##....##....###
  .#..#..#..#..#..# */

  // WIDTH: 20 columns;
  // HEIGHT: 3 rows;

  const COL_END = image[0].length - 20;
  const ROW_END = image.length - 2;
  let count = 0;

  for (let row = 1; row < ROW_END; row++) {
    for (let col = 1; col < COL_END; col++) {
      if (
        image[row][col] === '#' &&
        image[row - 1][col + 18] === '#' &&
        image[row][col + 5] === '#' &&
        image[row][col + 6] === '#' &&
        image[row][col + 11] === '#' &&
        image[row][col + 12] === '#' &&
        image[row][col + 17] === '#' &&
        image[row][col + 18] === '#' &&
        image[row][col + 19] === '#' &&
        image[row + 1][col + 1] === '#' &&
        image[row + 1][col + 4] === '#' &&
        image[row + 1][col + 7] === '#' &&
        image[row + 1][col + 10] === '#' &&
        image[row + 1][col + 13] === '#' &&
        image[row + 1][col + 16] === '#'
      )
        count++;
    }
  }

  return count * 15;
};

const part1 = (tiles) => {
  const edgeCounts = {};

  for (const tileID in tiles) {
    findEdges(tileID);

    const numEdges = tiles[tileID].edges.length;

    if (!edgeCounts[numEdges]) edgeCounts[numEdges] = { ids: [] };
    edgeCounts[numEdges].count = (edgeCounts[numEdges].count || 0) + 1;
    edgeCounts[numEdges].ids.push(tileID);
  }

  return [edgeCounts['2'].ids.reduce((res, id) => res * id, 1), edgeCounts];
};

const part2 = (edges) => {
  let image = buildImage(edges, Math.sqrt(TILE_COUNT))
    .map((row) => row.map((tile) => trimBorder(tile)))
    .reduce((image, rowOfTiles) => {
      const rows = new Array(rowOfTiles[0].length).fill(0).map((row) => []);

      rowOfTiles.forEach((tile) =>
        tile.forEach((r, index) => rows[index].push(r))
      );

      rows.forEach((row) => image.push(row));
      return image;
    }, [])
    .map((row) => row.join(''));

  let seaMonster = 0;
  let rotateCount = 0;
  let flipped = 0;

  while (seaMonster < 1 && flipped < 3) {
    if (rotateCount === 4) flipped++;

    rotateCount %= 4;

    if (flipped === 0) {
      const rotatedImage = rotate(image, rotateCount);
      seaMonster = findLochNess(rotatedImage);
      rotateCount++;
    } else if (flipped === 1) {
      const rotatedImage = rotate(flip(image), rotateCount);
      seaMonster = findLochNess(rotatedImage);
      rotateCount++;
    } else if (flipped === 2) {
      const rotatedImage = rotate(flip(image, true), rotateCount);
      seaMonster = findLochNess(rotatedImage);
      rotateCount++;
    }
  }

  return (
    image.reduce(
      (count, row) =>
        count + row.split('').filter((char) => char === '#').length,
      0
    ) - seaMonster
  );
};

const [p1Answer, edgeCounts] = part1(tiles);

console.log(p1Answer); // Answer: 18482479935793
console.log(part2(edgeCounts)); // Answer: 2118
