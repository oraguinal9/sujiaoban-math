// ============================================================
// 苏教版初中数学 - 题库数据 V2.0
// 扩展题库 + 难度分级 + 易错标记 + 知识点标签
// ============================================================

const QUIZ_DATA = {
  // 题目难度定义
  // 1: 基础题（概念理解、简单计算）
  // 2: 提升题（综合应用、中等难度）
  // 3: 挑战题（压轴难度、多知识点综合）
  
  questions: [
    // ==================== 七上 第 2 章 有理数 ====================
    {
      id: 'q-g7-1-c2-001',
      chapterId: 'g7-1-c2',
      knowledgePoint: '有理数概念',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '下列各数中，负数是（　）',
      options: ['A. 0', 'B. -3', 'C. 5', 'D. +2'],
      answer: 'B',
      analysis: '负数是小于 0 的数。0 既不是正数也不是负数。-3 < 0，所以 -3 是负数。'
    },
    {
      id: 'q-g7-1-c2-002',
      chapterId: 'g7-1-c2',
      knowledgePoint: '绝对值',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: true,
      mistakeRate: 0.35,
      question: '|-5| 的值是（　）',
      options: ['A. 5', 'B. -5', 'C. ±5', 'D. 0'],
      answer: 'A',
      analysis: '绝对值表示到原点的距离，|-5| = 5。负数的绝对值是它的相反数。'
    },
    {
      id: 'q-g7-1-c2-003',
      chapterId: 'g7-1-c2',
      knowledgePoint: '相反数',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '−3 的相反数是（　）',
      options: ['A. 3', 'B. −3', 'C. 1/3', 'D. −1/3'],
      answer: 'A',
      analysis: '相反数的定义：只有符号不同的两个数互为相反数。−3 的相反数是 3。'
    },
    {
      id: 'q-g7-1-c2-004',
      chapterId: 'g7-1-c2',
      knowledgePoint: '数轴',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '在数轴上，表示 −3 的点在原点的（　）',
      options: ['A. 左侧', 'B. 右侧', 'C. 上方', 'D. 下方'],
      answer: 'A',
      analysis: '数轴上，负数在原点左侧，正数在原点右侧。-3 是负数，所以在原点左侧。'
    },
    {
      id: 'q-g7-1-c2-005',
      chapterId: 'g7-1-c2',
      knowledgePoint: '有理数乘方',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.55,
      question: '(-2)³ 的值是（　）',
      options: ['A. 8', 'B. -8', 'C. 6', 'D. -6'],
      answer: 'B',
      analysis: '(-2)³ = (-2)×(-2)×(-2) = 4×(-2) = -8。负数的奇数次幂为负。'
    },
    {
      id: 'q-g7-1-c2-006',
      chapterId: 'g7-1-c2',
      knowledgePoint: '有理数乘方',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.50,
      question: '下列运算正确的是（　）',
      options: ['A. (-2)² = -4', 'B. -2² = 4', 'C. (-2)² = 4', 'D. -(-2)² = 4'],
      answer: 'C',
      analysis: '(-2)² = (-2)×(-2) = 4 ✓\n-2² = -(2²) = -4（先算乘方再取负）\n-(-2)² = -((-2)²) = -4\n注意括号的区别！这是高频易错点！'
    },
    {
      id: 'q-g7-1-c2-007',
      chapterId: 'g7-1-c2',
      knowledgePoint: '有理数加减',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.38,
      question: '计算：-5 + 3 =（　）',
      options: ['A. -8', 'B. -2', 'C. 2', 'D. 8'],
      answer: 'B',
      analysis: '异号两数相加，取绝对值较大的符号，并用较大的绝对值减去较小的绝对值。\n|-5| = 5，|3| = 3，5 > 3\n所以结果为负，5-3 = 2，答案是 -2。'
    },
    {
      id: 'q-g7-1-c2-008',
      chapterId: 'g7-1-c2',
      knowledgePoint: '有理数乘除',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '计算：(-3) × (-4) =（　）',
      options: ['A. -12', 'B. 12', 'C. -7', 'D. 7'],
      answer: 'B',
      analysis: '两数相乘，同号得正，异号得负。\n(-3) × (-4) = 12（负负得正）'
    },
    {
      id: 'q-g7-1-c2-009',
      chapterId: 'g7-1-c2',
      knowledgePoint: '有理数综合',
      type: 'choice',
      difficulty: 3,
      isCommonMistake: true,
      mistakeRate: 0.45,
      question: '计算：-2² + (-3)² - |-4| =（　）',
      options: ['A. 1', 'B. 5', 'C. -3', 'D. 9'],
      answer: 'A',
      analysis: '-2² = -4（先算乘方再取负）\n(-3)² = 9\n|-4| = 4\n原式 = -4 + 9 - 4 = 1'
    },

    // ==================== 七上 第 3 章 用字母表示数 ====================
    {
      id: 'q-g7-1-c3-001',
      chapterId: 'g7-1-c3',
      knowledgePoint: '代数式',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '下列式子中，是代数式的是（　）',
      options: ['A. 2 + 3 = 5', 'B. x + 1', 'C. 3x > 5', 'D. S = πr²'],
      answer: 'B',
      analysis: '代数式是用运算符号把数或表示数的字母连接而成的式子，不含等号或不等号。'
    },
    {
      id: 'q-g7-1-c3-002',
      chapterId: 'g7-1-c3',
      knowledgePoint: '单项式',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '单项式 -3x²y 的系数和次数分别是（　）',
      options: ['A. -3, 2', 'B. -3, 3', 'C. 3, 3', 'D. -3, 2'],
      answer: 'B',
      analysis: '系数是 -3；次数是所有字母指数之和：2 + 1 = 3'
    },
    {
      id: 'q-g7-1-c3-003',
      chapterId: 'g7-1-c3',
      knowledgePoint: '同类项',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: true,
      mistakeRate: 0.30,
      question: '下列各组中，是同类项的是（　）',
      options: ['A. 2x 和 2y', 'B. 3xy 和 3x²y', 'C. -5ab 和 5ba', 'D. a² 和 a³'],
      answer: 'C',
      analysis: '同类项：所含字母相同，且相同字母的指数也相同。\n-5ab 和 5ba 中，字母都是 a 和 b，指数都是 1，是同类项。'
    },
    {
      id: 'q-g7-1-c3-004',
      chapterId: 'g7-1-c3',
      knowledgePoint: '合并同类项',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.35,
      question: '计算：3x - 5x + 2x =（　）',
      options: ['A. 0', 'B. x', 'C. -x', 'D. 10x'],
      answer: 'A',
      analysis: '合并同类项：系数相加减，字母和指数不变。\n3 - 5 + 2 = 0，所以 3x - 5x + 2x = 0'
    },
    {
      id: 'q-g7-1-c3-005',
      chapterId: 'g7-1-c3',
      knowledgePoint: '去括号',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.40,
      question: '去括号：-(2x - 3) =（　）',
      options: ['A. -2x - 3', 'B. -2x + 3', 'C. 2x - 3', 'D. 2x + 3'],
      answer: 'B',
      analysis: '括号前是负号，去括号后各项都要变号。\n-(2x - 3) = -2x + 3'
    },
    {
      id: 'q-g7-1-c3-006',
      chapterId: 'g7-1-c3',
      knowledgePoint: '整式加减',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '计算：(2x + 3y) - (x - y) =（　）',
      options: ['A. x + 2y', 'B. x + 4y', 'C. x + 3y', 'D. 3x + 2y'],
      answer: 'B',
      analysis: '(2x + 3y) - (x - y)\n= 2x + 3y - x + y\n= x + 4y'
    },

    // ==================== 七上 第 4 章 一元一次方程 ====================
    {
      id: 'q-g7-1-c4-001',
      chapterId: 'g7-1-c4',
      knowledgePoint: '一元一次方程概念',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '下列方程中，是一元一次方程的是（　）',
      options: ['A. x² + 1 = 0', 'B. 2x + 3 = 7', 'C. x + y = 5', 'D. 1/x = 2'],
      answer: 'B',
      analysis: '一元一次方程：只含一个未知数，且未知数的最高次数为 1 的整式方程。'
    },
    {
      id: 'q-g7-1-c4-002',
      chapterId: 'g7-1-c4',
      knowledgePoint: '解一元一次方程',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '方程 2x = 6 的解是（　）',
      options: ['A. x = 2', 'B. x = 3', 'C. x = 4', 'D. x = 12'],
      answer: 'B',
      analysis: '两边同时除以 2：x = 6 ÷ 2 = 3'
    },
    {
      id: 'q-g7-1-c4-003',
      chapterId: 'g7-1-c4',
      knowledgePoint: '解一元一次方程',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.42,
      question: '解方程 3x - 5 = 2x + 1，移项正确的是（　）',
      options: ['A. 3x + 2x = 1 + 5', 'B. 3x - 2x = 1 - 5', 'C. 3x - 2x = 1 + 5', 'D. 3x + 2x = 1 - 5'],
      answer: 'C',
      analysis: '移项要变号！\n3x - 5 = 2x + 1\n3x - 2x = 1 + 5\nx = 6'
    },
    {
      id: 'q-g7-1-c4-004',
      chapterId: 'g7-1-c4',
      knowledgePoint: '解一元一次方程',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.38,
      question: '解方程 2(x - 3) = 4，去括号正确的是（　）',
      options: ['A. 2x - 3 = 4', 'B. 2x - 6 = 4', 'C. 2x + 6 = 4', 'D. x - 3 = 2'],
      answer: 'B',
      analysis: '去括号：括号外的数要乘到括号内每一项。\n2(x - 3) = 2x - 6'
    },
    {
      id: 'q-g7-1-c4-005',
      chapterId: 'g7-1-c4',
      knowledgePoint: '列方程解应用题',
      type: 'choice',
      difficulty: 3,
      isCommonMistake: true,
      mistakeRate: 0.50,
      question: '某商品原价 100 元，打 8 折后售价为（　）',
      options: ['A. 20 元', 'B. 80 元', 'C. 90 元', 'D. 120 元'],
      answer: 'B',
      analysis: '打 8 折 = 原价 × 0.8\n100 × 0.8 = 80 元'
    },

    // ==================== 七下 第 7 章 幂的运算 ====================
    {
      id: 'q-g7-2-c7-001',
      chapterId: 'g7-2-c7',
      knowledgePoint: '同底数幂乘法',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '计算：a² · a³ =（　）',
      options: ['A. a⁵', 'B. a⁶', 'C. 2a⁵', 'D. a⁸'],
      answer: 'A',
      analysis: '同底数幂相乘，底数不变，指数相加。\na² · a³ = a²⁺³ = a⁵'
    },
    {
      id: 'q-g7-2-c7-002',
      chapterId: 'g7-2-c7',
      knowledgePoint: '幂的乘方',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '计算：(a²)³ =（　）',
      options: ['A. a⁵', 'B. a⁶', 'C. a⁸', 'D. 3a²'],
      answer: 'B',
      analysis: '幂的乘方，底数不变，指数相乘。\n(a²)³ = a²ˣ³ = a⁶'
    },
    {
      id: 'q-g7-2-c7-003',
      chapterId: 'g7-2-c7',
      knowledgePoint: '积的乘方',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '计算：(ab)² =（　）',
      options: ['A. ab²', 'B. a²b', 'C. a²b²', 'D. 2ab'],
      answer: 'C',
      analysis: '积的乘方，等于把积的每一个因式分别乘方。\n(ab)² = a²b²'
    },
    {
      id: 'q-g7-2-c7-004',
      chapterId: 'g7-2-c7',
      knowledgePoint: '同底数幂除法',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.35,
      question: '计算：a⁶ ÷ a² =（　）',
      options: ['A. a³', 'B. a⁴', 'C. a⁸', 'D. a¹²'],
      answer: 'B',
      analysis: '同底数幂相除，底数不变，指数相减。\na⁶ ÷ a² = a⁶⁻² = a⁴'
    },

    // ==================== 七下 第 9 章 整式乘法与因式分解 ====================
    {
      id: 'q-g7-2-c9-001',
      chapterId: 'g7-2-c9',
      knowledgePoint: '平方差公式',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '下列式子中，能用平方差公式计算的是（　）',
      options: ['A. (x+1)(x+1)', 'B. (x+1)(x-1)', 'C. (x-1)(x-1)', 'D. (x+2)(x+1)'],
      answer: 'B',
      analysis: '平方差公式：(a+b)(a-b) = a²-b²\n(x+1)(x-1) = x²-1'
    },
    {
      id: 'q-g7-2-c9-002',
      chapterId: 'g7-2-c9',
      knowledgePoint: '完全平方公式',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.45,
      question: '计算：(x+2)² =（　）',
      options: ['A. x²+4', 'B. x²+2x+4', 'C. x²+4x+4', 'D. x²+4x+2'],
      answer: 'C',
      analysis: '完全平方公式：(a+b)² = a²+2ab+b²\n(x+2)² = x²+2·x·2+2² = x²+4x+4'
    },
    {
      id: 'q-g7-2-c9-003',
      chapterId: 'g7-2-c9',
      knowledgePoint: '因式分解',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.40,
      question: '分解因式：x²-4 =（　）',
      options: ['A. (x+2)(x-2)', 'B. (x-2)²', 'C. (x+2)²', 'D. x(x-4)'],
      answer: 'A',
      analysis: '平方差公式：a²-b² = (a+b)(a-b)\nx²-4 = x²-2² = (x+2)(x-2)'
    },
    {
      id: 'q-g7-2-c9-004',
      chapterId: 'g7-2-c9',
      knowledgePoint: '因式分解',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.38,
      question: '分解因式：x²+6x+9 =（　）',
      options: ['A. (x+3)(x-3)', 'B. (x+3)²', 'C. (x-3)²', 'D. x(x+6)+9'],
      answer: 'B',
      analysis: '完全平方公式：a²+2ab+b² = (a+b)²\nx²+6x+9 = x²+2·x·3+3² = (x+3)²'
    },

    // ==================== 八上 第 2 章 实数 ====================
    {
      id: 'q-g8-1-c2-001',
      chapterId: 'g8-1-c2',
      knowledgePoint: '平方根',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: true,
      mistakeRate: 0.35,
      question: '4 的平方根是（　）',
      options: ['A. 2', 'B. -2', 'C. ±2', 'D. 16'],
      answer: 'C',
      analysis: '平方根的定义：如果 x² = a，那么 x 叫做 a 的平方根。\n(±2)² = 4，所以 4 的平方根是 ±2'
    },
    {
      id: 'q-g8-1-c2-002',
      chapterId: 'g8-1-c2',
      knowledgePoint: '算术平方根',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: true,
      mistakeRate: 0.40,
      question: '√4 的值是（　）',
      options: ['A. 2', 'B. -2', 'C. ±2', 'D. 4'],
      answer: 'A',
      analysis: '√a 表示 a 的算术平方根（非负的那个平方根）。\n√4 = 2（注意：不是 ±2）'
    },
    {
      id: 'q-g8-1-c2-003',
      chapterId: 'g8-1-c2',
      knowledgePoint: '立方根',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '-8 的立方根是（　）',
      options: ['A. 2', 'B. -2', 'C. ±2', 'D. -4'],
      answer: 'B',
      analysis: '立方根的定义：如果 x³ = a，那么 x 叫做 a 的立方根。\n(-2)³ = -8，所以 -8 的立方根是 -2'
    },
    {
      id: 'q-g8-1-c2-004',
      chapterId: 'g8-1-c2',
      knowledgePoint: '实数概念',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '下列各数中，是无理数的是（　）',
      options: ['A. 3.14', 'B. 22/7', 'C. √2', 'D. 0'],
      answer: 'C',
      analysis: '无理数：无限不循环小数。\n√2 是无理数；3.14、22/7、0 都是有理数。'
    },

    // ==================== 八上 第 3 章 勾股定理 ====================
    {
      id: 'q-g8-1-c3-001',
      chapterId: 'g8-1-c3',
      knowledgePoint: '勾股定理',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '在 Rt△ABC 中，∠C=90°，a=3，b=4，则 c =（　）',
      options: ['A. 5', 'B. 6', 'C. 7', 'D. 25'],
      answer: 'A',
      analysis: '勾股定理：a²+b²=c²\n3²+4²=9+16=25\nc = √25 = 5'
    },
    {
      id: 'q-g8-1-c3-002',
      chapterId: 'g8-1-c3',
      knowledgePoint: '勾股定理逆定理',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '下列各组数中，能组成直角三角形三边的是（　）',
      options: ['A. 3, 4, 5', 'B. 4, 5, 6', 'C. 5, 6, 7', 'D. 6, 7, 8'],
      answer: 'A',
      analysis: '勾股定理逆定理：如果 a²+b²=c²，那么这个三角形是直角三角形。\n3²+4²=9+16=25=5² ✓'
    },
    {
      id: 'q-g8-1-c3-003',
      chapterId: 'g8-1-c3',
      knowledgePoint: '勾股定理',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.35,
      question: '在 Rt△ABC 中，两边长为 3 和 4，则第三边长为（　）',
      options: ['A. 5', 'B. √7', 'C. 5 或 √7', 'D. 7'],
      answer: 'C',
      analysis: '需要分类讨论：\n① 3 和 4 都是直角边：c = √(3²+4²) = 5\n② 4 是斜边，3 是直角边：b = √(4²-3²) = √7'
    },

    // ==================== 八上 第 5 章 一次函数 ====================
    {
      id: 'q-g8-1-c5-001',
      chapterId: 'g8-1-c5',
      knowledgePoint: '一次函数概念',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '下列函数中，是一次函数的是（　）',
      options: ['A. y = x²+1', 'B. y = 2x+1', 'C. y = 1/x', 'D. y = √x'],
      answer: 'B',
      analysis: '一次函数的形式：y = kx+b（k≠0）\ny = 2x+1 是一次函数。'
    },
    {
      id: 'q-g8-1-c5-002',
      chapterId: 'g8-1-c5',
      knowledgePoint: '一次函数图像',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.40,
      question: '一次函数 y = 2x-1 的图象不经过（　）',
      options: ['A. 第一象限', 'B. 第二象限', 'C. 第三象限', 'D. 第四象限'],
      answer: 'B',
      analysis: 'k = 2 > 0，图象从左下到右上；b = -1 < 0，与 y 轴交于负半轴。\n所以图象经过第一、三、四象限，不经过第二象限。'
    },
    {
      id: 'q-g8-1-c5-003',
      chapterId: 'g8-1-c5',
      knowledgePoint: '待定系数法',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '已知一次函数 y = kx+b 的图象经过点 (1, 3) 和 (2, 5)，则 k =（　）',
      options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
      answer: 'B',
      analysis: '代入两点坐标：\n3 = k + b\n5 = 2k + b\n相减得：2 = k，所以 k = 2'
    },

    // ==================== 八下 第 9 章 中心对称图形 ====================
    {
      id: 'q-g8-2-c9-001',
      chapterId: 'g8-2-c9',
      knowledgePoint: '平行四边形性质',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '平行四边形的对角线（　）',
      options: ['A. 相等', 'B. 互相垂直', 'C. 互相平分', 'D. 平分一组对角'],
      answer: 'C',
      analysis: '平行四边形的性质：对角线互相平分。'
    },
    {
      id: 'q-g8-2-c9-002',
      chapterId: 'g8-2-c9',
      knowledgePoint: '平行四边形判定',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '下列条件中，能判定四边形是平行四边形的是（　）',
      options: ['A. 一组对边平行', 'B. 两组对边分别相等', 'C. 对角线相等', 'D. 一组对角相等'],
      answer: 'B',
      analysis: '平行四边形判定定理：两组对边分别相等的四边形是平行四边形。'
    },

    // ==================== 九上 第 1 章 一元二次方程 ====================
    {
      id: 'q-g9-1-c1-001',
      chapterId: 'g9-1-c1',
      knowledgePoint: '一元二次方程概念',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '下列方程中，是一元二次方程的是（　）',
      options: ['A. x+1=0', 'B. x²+1=0', 'C. x+y=1', 'D. 1/x=1'],
      answer: 'B',
      analysis: '一元二次方程：只含一个未知数，且未知数的最高次数为 2 的整式方程。'
    },
    {
      id: 'q-g9-1-c1-002',
      chapterId: 'g9-1-c1',
      knowledgePoint: '解一元二次方程',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '方程 x² = 4 的解是（　）',
      options: ['A. x = 2', 'B. x = -2', 'C. x = ±2', 'D. x = 4'],
      answer: 'C',
      analysis: '直接开平方法：x² = 4，x = ±√4 = ±2'
    },
    {
      id: 'q-g9-1-c1-003',
      chapterId: 'g9-1-c1',
      knowledgePoint: '判别式',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.45,
      question: '一元二次方程 x²-2x+1=0 的根的情况是（　）',
      options: ['A. 有两个不相等的实数根', 'B. 有两个相等的实数根', 'C. 没有实数根', 'D. 无法确定'],
      answer: 'B',
      analysis: '判别式 Δ = b²-4ac = (-2)²-4×1×1 = 4-4 = 0\nΔ = 0，方程有两个相等的实数根。'
    },
    {
      id: 'q-g9-1-c1-004',
      chapterId: 'g9-1-c1',
      knowledgePoint: '韦达定理',
      type: 'choice',
      difficulty: 3,
      isCommonMistake: true,
      mistakeRate: 0.50,
      question: '已知 x₁、x₂是方程 x²-3x+2=0 的两根，则 x₁+x₂ =（　）',
      options: ['A. -3', 'B. 3', 'C. 2', 'D. -2'],
      answer: 'B',
      analysis: '韦达定理：x₁+x₂ = -b/a\nx²-3x+2=0 中，a=1，b=-3\nx₁+x₂ = -(-3)/1 = 3'
    },

    // ==================== 九上 第 2 章 对称图形—圆 ====================
    {
      id: 'q-g9-1-c2-001',
      chapterId: 'g9-1-c2',
      knowledgePoint: '圆的基本性质',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '圆的直径是 10cm，则半径是（　）',
      options: ['A. 2.5cm', 'B. 5cm', 'C. 10cm', 'D. 20cm'],
      answer: 'B',
      analysis: '半径 = 直径 ÷ 2 = 10 ÷ 2 = 5cm'
    },
    {
      id: 'q-g9-1-c2-002',
      chapterId: 'g9-1-c2',
      knowledgePoint: '圆周角定理',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.40,
      question: '在⊙O 中，弦 AB 所对的圆心角∠AOB=100°，则弦 AB 所对的圆周角∠ACB =（　）',
      options: ['A. 100°', 'B. 80°', 'C. 50°', 'D. 40°'],
      answer: 'C',
      analysis: '圆周角定理：同弧所对的圆周角等于圆心角的一半。\n∠ACB = 1/2 × ∠AOB = 1/2 × 100° = 50°'
    },
    {
      id: 'q-g9-1-c2-003',
      chapterId: 'g9-1-c2',
      knowledgePoint: '垂径定理',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '在⊙O 中，直径 CD⊥弦 AB 于点 E，若 AB=8，则 AE =（　）',
      options: ['A. 2', 'B. 4', 'C. 6', 'D. 8'],
      answer: 'B',
      analysis: '垂径定理：垂直于弦的直径平分这条弦。\nAE = AB ÷ 2 = 8 ÷ 2 = 4'
    },

    // ==================== 九下 第 5 章 二次函数 ====================
    {
      id: 'q-g9-2-c5-001',
      chapterId: 'g9-2-c5',
      knowledgePoint: '二次函数概念',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '下列函数中，是二次函数的是（　）',
      options: ['A. y = 2x+1', 'B. y = x²+1', 'C. y = 1/x', 'D. y = √x'],
      answer: 'B',
      analysis: '二次函数的形式：y = ax²+bx+c（a≠0）'
    },
    {
      id: 'q-g9-2-c5-002',
      chapterId: 'g9-2-c5',
      knowledgePoint: '二次函数图像',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.40,
      question: '二次函数 y = x²-2x+3 的图象开口方向是（　）',
      options: ['A. 向上', 'B. 向下', 'C. 向左', 'D. 向右'],
      answer: 'A',
      analysis: '二次函数 y = ax²+bx+c，当 a > 0 时开口向上，a < 0 时开口向下。\n本题中 a = 1 > 0，所以开口向上。'
    },
    {
      id: 'q-g9-2-c5-003',
      chapterId: 'g9-2-c5',
      knowledgePoint: '二次函数顶点',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.45,
      question: '抛物线 y = (x-1)²+2 的顶点坐标是（　）',
      options: ['A. (1, 2)', 'B. (-1, 2)', 'C. (1, -2)', 'D. (-1, -2)'],
      answer: 'A',
      analysis: '顶点式：y = a(x-h)²+k 的顶点坐标是 (h, k)\ny = (x-1)²+2 的顶点坐标是 (1, 2)'
    },

    // ==================== 九下 第 6 章 图形的相似 ====================
    {
      id: 'q-g9-2-c6-001',
      chapterId: 'g9-2-c6',
      knowledgePoint: '相似三角形判定',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '两个相似三角形的相似比为 2:3，则它们的面积比为（　）',
      options: ['A. 2:3', 'B. 3:2', 'C. 4:9', 'D. 9:4'],
      answer: 'C',
      analysis: '相似三角形的面积比等于相似比的平方。\n(2:3)² = 4:9'
    },
    {
      id: 'q-g9-2-c6-002',
      chapterId: 'g9-2-c6',
      knowledgePoint: '相似三角形性质',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '在△ABC 中，DE∥BC，AD:DB=1:2，则 DE:BC =（　）',
      options: ['A. 1:2', 'B. 1:3', 'C. 2:3', 'D. 3:1'],
      answer: 'B',
      analysis: '∵ DE∥BC\n∴ △ADE ∽ △ABC\n∴ DE:BC = AD:AB = AD:(AD+DB) = 1:(1+2) = 1:3'
    },

    // ==================== 九下 第 7 章 锐角三角函数 ====================
    {
      id: 'q-g9-2-c7-001',
      chapterId: 'g9-2-c7',
      knowledgePoint: '三角函数定义',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '在 Rt△ABC 中，∠C=90°，则 sinA =（　）',
      options: ['A. 对边/斜边', 'B. 邻边/斜边', 'C. 对边/邻边', 'D. 斜边/对边'],
      answer: 'A',
      analysis: '正弦定义：sinA = ∠A 的对边/斜边'
    },
    {
      id: 'q-g9-2-c7-002',
      chapterId: 'g9-2-c7',
      knowledgePoint: '特殊角三角函数',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: true,
      mistakeRate: 0.35,
      question: 'sin30° 的值是（　）',
      options: ['A. 1/2', 'B. √2/2', 'C. √3/2', 'D. 1'],
      answer: 'A',
      analysis: '特殊角三角函数值：\nsin30° = 1/2\ncos30° = √3/2\ntan30° = √3/3'
    },
    {
      id: 'q-g9-2-c7-003',
      chapterId: 'g9-2-c7',
      knowledgePoint: '解直角三角形',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '在 Rt△ABC 中，∠C=90°，AC=3，BC=4，则 sinA =（　）',
      options: ['A. 3/5', 'B. 4/5', 'C. 3/4', 'D. 4/3'],
      answer: 'B',
      analysis: '由勾股定理：AB = √(AC²+BC²) = √(9+16) = 5\nsinA = 对边/斜边 = BC/AB = 4/5'
    },

    // ==================== 七下 第 8 章 相交线与平行线 ====================
    {
      id: 'q-g7-2-c8-001',
      chapterId: 'g7-2-c8',
      knowledgePoint: '对顶角',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '对顶角的性质是（　）',
      options: ['A. 互补', 'B. 互余', 'C. 相等', 'D. 平行'],
      answer: 'C',
      analysis: '对顶角的性质：对顶角相等。'
    },
    {
      id: 'q-g7-2-c8-002',
      chapterId: 'g7-2-c8',
      knowledgePoint: '余角补角',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: true,
      mistakeRate: 0.30,
      question: '30°角的余角是（　）',
      options: ['A. 30°', 'B. 60°', 'C. 90°', 'D. 150°'],
      answer: 'B',
      analysis: '余角：两角之和为 90°。\n90° - 30° = 60°'
    },
    {
      id: 'q-g7-2-c8-003',
      chapterId: 'g7-2-c8',
      knowledgePoint: '余角补角',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: true,
      mistakeRate: 0.28,
      question: '50°角的补角是（　）',
      options: ['A. 40°', 'B. 50°', 'C. 130°', 'D. 150°'],
      answer: 'C',
      analysis: '补角：两角之和为 180°。\n180° - 50° = 130°'
    },
    {
      id: 'q-g7-2-c8-004',
      chapterId: 'g7-2-c8',
      knowledgePoint: '平行线判定',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '如图，能判定 AB∥CD 的条件是（　）',
      options: ['A. ∠1=∠2', 'B. ∠2=3', 'C. ∠1=∠3', 'D. ∠2+∠3=180°'],
      answer: 'A',
      analysis: '同位角相等，两直线平行。\n∠1 和∠2 是同位角，若∠1=∠2，则 AB∥CD'
    },
    {
      id: 'q-g7-2-c8-005',
      chapterId: 'g7-2-c8',
      knowledgePoint: '平行线性质',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '如图，AB∥CD，若∠1=60°，则∠2 =（　）',
      options: ['A. 30°', 'B. 60°', 'C. 120°', 'D. 150°'],
      answer: 'C',
      analysis: '两直线平行，同旁内角互补。\n∠1+∠2 = 180°\n∠2 = 180° - 60° = 120°'
    },

    // ==================== 八上 第 1 章 三角形 ====================
    {
      id: 'q-g8-1-c1-001',
      chapterId: 'g8-1-c1',
      knowledgePoint: '三角形内角和',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '三角形的内角和等于（　）',
      options: ['A. 90°', 'B. 180°', 'C. 270°', 'D. 360°'],
      answer: 'B',
      analysis: '三角形内角和定理：三角形的内角和等于 180°。'
    },
    {
      id: 'q-g8-1-c1-002',
      chapterId: 'g8-1-c1',
      knowledgePoint: '全等三角形判定',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '下列条件中，不能判定两个三角形全等的是（　）',
      options: ['A. SSS', 'B. SAS', 'C. ASA', 'D. AAA'],
      answer: 'D',
      analysis: 'AAA 只能判定相似，不能判定全等。\n全等判定方法：SSS、SAS、ASA、AAS、HL（直角三角形）'
    },
    {
      id: 'q-g8-1-c1-003',
      chapterId: 'g8-1-c1',
      knowledgePoint: '全等三角形性质',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '全等三角形的对应边（　）',
      options: ['A. 相等', 'B. 互补', 'C. 互余', 'D. 成比例'],
      answer: 'A',
      analysis: '全等三角形的性质：对应边相等，对应角相等。'
    },
    {
      id: 'q-g8-1-c1-004',
      chapterId: 'g8-1-c1',
      knowledgePoint: '线段中点',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '点 M 是线段 AB 的中点，若 AB=10，则 AM =（　）',
      options: ['A. 2', 'B. 5', 'C. 10', 'D. 20'],
      answer: 'B',
      analysis: '中点定义：把线段分成两条相等线段的点。\nAM = AB ÷ 2 = 10 ÷ 2 = 5'
    },

    // ==================== 八下 第 10 章 分式 ====================
    {
      id: 'q-g8-2-c10-001',
      chapterId: 'g8-2-c10',
      knowledgePoint: '分式概念',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: true,
      mistakeRate: 0.30,
      question: '下列式子中，是分式的是（　）',
      options: ['A. x/2', 'B. 2/x', 'C. x/π', 'D. (x+1)/2'],
      answer: 'B',
      analysis: '分式的定义：分母中含有字母的式子。\n2/x 的分母含有字母 x，是分式。'
    },
    {
      id: 'q-g8-2-c10-002',
      chapterId: 'g8-2-c10',
      knowledgePoint: '分式有意义的条件',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.35,
      question: '分式 1/(x-2) 有意义的条件是（　）',
      options: ['A. x=2', 'B. x≠2', 'C. x>2', 'D. x<2'],
      answer: 'B',
      analysis: '分式有意义的条件：分母≠0\nx-2 ≠ 0，即 x ≠ 2'
    },

    // ==================== 八下 第 11 章 反比例函数 ====================
    {
      id: 'q-g8-2-c11-001',
      chapterId: 'g8-2-c11',
      knowledgePoint: '反比例函数概念',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '下列函数中，是反比例函数的是（　）',
      options: ['A. y = 2x', 'B. y = 2/x', 'C. y = x²', 'D. y = x+2'],
      answer: 'B',
      analysis: '反比例函数的形式：y = k/x（k≠0）'
    },
    {
      id: 'q-g8-2-c11-002',
      chapterId: 'g8-2-c11',
      knowledgePoint: '反比例函数图像',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '反比例函数 y = 2/x 的图象在（　）',
      options: ['A. 第一、二象限', 'B. 第一、三象限', 'C. 第二、四象限', 'D. 第三、四象限'],
      answer: 'B',
      analysis: '当 k > 0 时，反比例函数图象在第一、三象限。\n本题中 k = 2 > 0'
    },

    // ==================== 九上 第 4 章 等可能条件下的概率 ====================
    {
      id: 'q-g9-1-c4-001',
      chapterId: 'g9-1-c4',
      knowledgePoint: '概率计算',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '掷一枚均匀的骰子，向上一面是 6 的概率是（　）',
      options: ['A. 1/2', 'B. 1/3', 'C. 1/4', 'D. 1/6'],
      answer: 'D',
      analysis: '等可能事件的概率：P = 符合条件的情况数/总情况数\nP(6) = 1/6'
    },
    {
      id: 'q-g9-1-c4-002',
      chapterId: 'g9-1-c4',
      knowledgePoint: '概率计算',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '一个不透明的袋子中装有 3 个红球和 2 个白球，从中随机摸出 1 个球，摸到红球的概率是（　）',
      options: ['A. 1/5', 'B. 2/5', 'C. 3/5', 'D. 2/3'],
      answer: 'C',
      analysis: 'P(红球) = 红球数/总球数 = 3/(3+2) = 3/5'
    },

    // ==================== 九下 第 8 章 统计 ====================
    {
      id: 'q-g9-2-c8-001',
      chapterId: 'g9-2-c8',
      knowledgePoint: '平均数',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '一组数据 2, 3, 4, 5, 6 的平均数是（　）',
      options: ['A. 3', 'B. 4', 'C. 5', 'D. 6'],
      answer: 'B',
      analysis: '平均数 = (2+3+4+5+6) ÷ 5 = 20 ÷ 5 = 4'
    },
    {
      id: 'q-g9-2-c8-002',
      chapterId: 'g9-2-c8',
      knowledgePoint: '中位数',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '一组数据 1, 2, 3, 4, 5 的中位数是（　）',
      options: ['A. 2', 'B. 3', 'C. 4', 'D. 2.5'],
      answer: 'B',
      analysis: '数据已按从小到大排列，共 5 个数（奇数个），中位数是第 3 个数，即 3。'
    },
    {
      id: 'q-g9-2-c8-003',
      chapterId: 'g9-2-c8',
      knowledgePoint: '众数',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '一组数据 1, 2, 2, 3, 4 的众数是（　）',
      options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
      answer: 'B',
      analysis: '众数：出现次数最多的数据。\n2 出现了 2 次，次数最多，所以众数是 2。'
    },
    {
      id: 'q-g9-2-c8-004',
      chapterId: 'g9-2-c8',
      knowledgePoint: '方差',
      type: 'choice',
      difficulty: 2,
      isCommonMistake: true,
      mistakeRate: 0.35,
      question: '方差越小，说明数据（　）',
      options: ['A. 越大', 'B. 越小', 'C. 越稳定', 'D. 越不稳定'],
      answer: 'C',
      analysis: '方差是衡量数据波动大小的量，方差越小，数据越稳定。'
    },

    // ==================== 七上 第 6 章 平面图形的认识 ====================
    {
      id: 'q-g7-1-c6-001',
      chapterId: 'g7-1-c6',
      knowledgePoint: '线段性质',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '两点之间，____最短。（　）',
      options: ['A. 直线', 'B. 线段', 'C. 射线', 'D. 曲线'],
      answer: 'B',
      analysis: '线段的基本性质：两点之间，线段最短。'
    },
    {
      id: 'q-g7-1-c6-002',
      chapterId: 'g7-1-c6',
      knowledgePoint: '角的度量',
      type: 'choice',
      difficulty: 1,
      isCommonMistake: false,
      mistakeRate: 0,
      question: '1 周角 =（　）',
      options: ['A. 90°', 'B. 180°', 'C. 270°', 'D. 360°'],
      answer: 'D',
      analysis: '周角：一条射线绕端点旋转一周所成的角，等于 360°。'
    },

    // ==================== 综合提升题 ====================
    {
      id: 'q-comprehensive-001',
      chapterId: 'comprehensive',
      knowledgePoint: '综合应用',
      type: 'choice',
      difficulty: 3,
      isCommonMistake: true,
      mistakeRate: 0.55,
      question: '已知 a+b=5，ab=6，则 a²+b² =（　）',
      options: ['A. 13', 'B. 17', 'C. 25', 'D. 37'],
      answer: 'A',
      analysis: '完全平方公式变形：\n(a+b)² = a²+2ab+b²\na²+b² = (a+b)² - 2ab\n= 5² - 2×6 = 25 - 12 = 13'
    },
    {
      id: 'q-comprehensive-002',
      chapterId: 'comprehensive',
      knowledgePoint: '综合应用',
      type: 'choice',
      difficulty: 3,
      isCommonMistake: true,
      mistakeRate: 0.60,
      question: '若 x²-3x+1=0，则 x+1/x =（　）',
      options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
      answer: 'C',
      analysis: '∵ x²-3x+1=0\n∴ x²+1 = 3x\n两边同除以 x（x≠0）：\nx + 1/x = 3'
    }
  ]
};
