import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingCart, BarChart, Gift, Award, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%8F%E6%98%8E%E5%B8%A6%E5%AD%97%E6%A8%AA-cTbbXpijhsz9uxlJ0UT1jh0K2odtIC.png"
              alt="ExinEarn Logo"
              width={300}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              产品特点
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              如何使用
            </Link>
            <Link href="#platforms" className="text-sm font-medium hover:text-primary">
              支持平台
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              常见问题
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              登录
            </Button>
            <Button>立即注册</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    ExinEarn <span className="text-primary">水龙头</span>
                  </h1>
                  <p className="text-xl text-muted-foreground">购物获得额外奖励，积少成多收益丰</p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  在淘宝、京东、拼多多等平台正常购物，通过 ExinEarn
                  水龙头获得额外奖励，不改变购物习惯，轻松累积可观收益。
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    立即开始 <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    了解更多
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mr-0 relative">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-primary animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-badge-percent"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m15 9-6 6" />
                    <path d="M9 9h.01" />
                    <path d="M15 15h.01" />
                  </svg>
                </div>
                <div
                  className="absolute -bottom-6 -right-6 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-primary animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-gift"
                  >
                    <polyline points="20 12 20 22 4 22 4 12" />
                    <rect width="20" height="5" x="2" y="7" />
                    <line x1="12" x2="12" y1="22" y2="7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                </div>
                <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-xl p-8 w-[400px] h-[500px] flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shopping-bag"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                        <path d="M3 6h18" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">购物流程</h3>
                      <p className="text-sm text-muted-foreground">通过 ExinEarn 获得奖励</p>
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary mr-3">
                        1
                      </div>
                      <div>
                        <p className="font-medium">通过 ExinEarn 进入购物平台</p>
                        <div className="flex mt-2 space-x-2">
                          <div className="w-8 h-8 bg-orange-50 rounded-md flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary"
                            >
                              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                              <path d="M3 6h18" />
                              <path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                          </div>
                          <div className="w-8 h-8 bg-orange-50 rounded-md flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary"
                            >
                              <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                              <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                              <path d="M2 7h20" />
                            </svg>
                          </div>
                          <div className="w-8 h-8 bg-orange-50 rounded-md flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary"
                            >
                              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary mr-3">
                        2
                      </div>
                      <div>
                        <p className="font-medium">正常购物，价格完全相同</p>
                        <div className="flex mt-2">
                          <div className="text-sm bg-green-50 text-green-600 px-2 py-1 rounded">¥ 原价购买</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary mr-3">
                        3
                      </div>
                      <div>
                        <p className="font-medium">获得额外奖励</p>
                        <div className="flex mt-2 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-yellow-500 mr-1"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <div className="text-sm bg-orange-50 text-primary px-2 py-1 rounded">+ 奖励金</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-primary/10 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">累计奖励</p>
                        <p className="text-2xl font-bold text-primary">¥ 8,659.25</p>
                      </div>
                      <div className="bg-primary text-white p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">产品特点</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ExinEarn 水龙头为您提供最优质的购物奖励体验
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">多平台支持</h3>
                <p className="text-center text-muted-foreground">
                  支持淘宝、京东、拼多多等多个主流购物平台，覆盖您的所有购物需求。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">持续奖励</h3>
                <p className="text-center text-muted-foreground">
                  每次购物都能获得额外奖励，长期使用积少成多，累积可观收益。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">数据透明</h3>
                <p className="text-center text-muted-foreground">订单跟踪实时可见，奖励金额清晰透明，让您放心购物。</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">专属优惠</h3>
                <p className="text-center text-muted-foreground">独家优惠券和促销活动，为会员提供更多额外福利。</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">安全保障</h3>
                <p className="text-center text-muted-foreground">严格的数据加密和隐私保护，确保您的账户和交易安全。</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">长期收益</h3>
                <p className="text-center text-muted-foreground">
                  众多用户使用4-5年，累积奖励上万元，长期使用价值显著。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">如何使用</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  简单四步，轻松获取购物奖励
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-center">注册账号</h3>
                  <p className="text-center text-muted-foreground">免费注册 ExinEarn 水龙头账号，填写基本信息。</p>
                </div>
                <div className="absolute right-0 top-6 hidden h-0.5 w-full bg-primary lg:block lg:w-1/2"></div>
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-center">浏览商品</h3>
                  <p className="text-center text-muted-foreground">通过 ExinEarn 水龙头进入您喜爱的购物平台。</p>
                </div>
                <div className="absolute left-0 right-0 top-6 hidden h-0.5 w-full bg-primary lg:block"></div>
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-center">正常购物</h3>
                  <p className="text-center text-muted-foreground">像平常一样购物，价格与直接购买完全相同。</p>
                </div>
                <div className="absolute left-0 top-6 hidden h-0.5 w-1/2 bg-primary lg:block"></div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">4</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-center">获取奖励</h3>
                  <p className="text-center text-muted-foreground">订单确认后，额外奖励自动到账，可随时提现。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">支持平台</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  覆盖电商与生活服务平台，满足您的所有消费需求
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 mt-12">
              {/* 淘宝 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <div className="w-20 h-20 bg-[#FF4400] rounded-lg flex items-center justify-center mx-auto">
                    <svg
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                    >
                      <path
                        d="M168.229 113.373h687.542c30.297 0 54.857 24.56 54.857 54.857v687.542c0 30.297-24.56 54.857-54.857 54.857H168.229c-30.297 0-54.857-24.56-54.857-54.857V168.23c0-30.297 24.56-54.857 54.857-54.857z"
                        fill="#FF4400"
                      ></path>
                      <path
                        d="M722.631 624.394c-28.297 7.5-59.643 14.357-93.643 20.357 22.714 39.214 41.357 83.357 52.5 133.5h-98.357c-8.357-30.857-21.857-61.714-39.857-91.714-39.857 4.5-82.5 7.5-126.857 8.357-74.357 1.5-142.5-2.143-182.357-5.357-61.714-5.357-69.214-33.643-53.357-59.143 15.857-25.5 31.714-41.357 61.714-36 30 5.357 96.214 15.857 178.5 15.857 41.357 0 81.214-2.143 117.857-5.357-28.297-30.857-60.857-60-96.214-85.5h-246.214v-45h142.5v-59.143h-114.214v-45h114.214v-85.5c-11.357 1.5-23.357 2.143-36 2.143h-78.214v-45h78.214c46.5 0 78.214-15.857 96.214-59.143h75.857c-7.5 15.857-15.857 30-25.5 42.857 30 15.857 69.214 15.857 114.214 15.857h96.214v45h-88.714c-8.357 0-17.357 0-26.357-0.643v83.357h133.5v45h-133.5v59.143h114.214v45h-204.214c25.5 17.357 49.5 36 71.357 56.357 30.857-4.5 60-9.643 85.5-15.857 25.5-6.214 57.857-15.857 78.214-24.214l15.857 42.857z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">淘宝</h3>
              </div>

              {/* 京东 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto">
                    <svg
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                    >
                      <path
                        d="M851.366 959.944H172.634c-59.94 0-108.578-48.638-108.578-108.578V172.634c0-59.94 48.638-108.578 108.578-108.578h678.732c59.94 0 108.578 48.638 108.578 108.578v678.732c0 59.94-48.638 108.578-108.578 108.578z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M851.366 959.944H172.634c-59.94 0-108.578-48.638-108.578-108.578V172.634c0-59.94 48.638-108.578 108.578-108.578h678.732c59.94 0 108.578 48.638 108.578 108.578v678.732c0 59.94-48.638 108.578-108.578 108.578z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M622.742 541.526c0 16.396-13.116 29.512-29.512 29.512h-59.024v59.024c0 16.396-13.116 29.512-29.512 29.512s-29.512-13.116-29.512-29.512v-59.024h-59.024c-16.396 0-29.512-13.116-29.512-29.512s13.116-29.512 29.512-29.512h59.024v-59.024c0-16.396 13.116-29.512 29.512-29.512s29.512 13.116 29.512 29.512v59.024h59.024c16.396 0 29.512 13.116 29.512 29.512z"
                        fill="#F10215"
                      ></path>
                      <path
                        d="M504.694 304.77c-81.98 0-147.56 65.58-147.56 147.56v88.536h295.12V452.33c0-81.98-65.58-147.56-147.56-147.56z m0 0c-81.98 0-147.56 65.58-147.56 147.56v88.536h295.12V452.33c0-81.98-65.58-147.56-147.56-147.56z"
                        fill="#F10215"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">京东</h3>
              </div>

              {/* 拼多多 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <div className="w-20 h-20 bg-[#E22E1F] rounded-lg flex items-center justify-center mx-auto">
                    <svg
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                    >
                      <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#E22E1F"></path>
                      <path
                        d="M671.36 305.344c-0.448-12.032-10.24-21.376-22.272-21.376h-274.56c-12.032 0-21.824 9.344-22.272 21.376l-9.344 249.088c-0.448 12.48 9.344 22.72 21.824 22.72h294.144c12.48 0 22.272-10.24 21.824-22.72l-9.344-249.088z m-159.744 227.264c-45.056 0-81.408-36.352-81.408-81.408 0-45.056 36.352-81.408 81.408-81.408 45.056 0 81.408 36.352 81.408 81.408 0 45.056-36.352 81.408-81.408 81.408z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M512 451.2m-40.96 0a40.96 40.96 0 1 0 81.92 0 40.96 40.96 0 1 0-81.92 0Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M512 693.248c-45.056 0-81.408-36.352-81.408-81.408v-40.96h162.816v40.96c0 45.056-36.352 81.408-81.408 81.408z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">拼多多</h3>
              </div>

              {/* 天猫 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <div className="w-20 h-20 bg-[#FF0036] rounded-lg flex items-center justify-center mx-auto">
                    <svg
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                    >
                      <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FF0036"></path>
                      <path
                        d="M726.528 629.76c-12.288 4.096-25.088 6.656-38.4 7.68-13.312 1.024-26.624 1.536-39.936 1.536-13.312 0-26.624-0.512-39.936-1.536-13.312-1.024-26.112-3.584-38.4-7.68v-48.64c12.288 8.704 25.088 15.36 38.4 20.48 13.312 4.608 26.624 7.168 39.936 7.168 13.312 0 26.624-2.56 39.936-7.168 13.312-5.12 26.112-11.776 38.4-20.48v48.64zM648.192 335.872c-30.72 0-58.88 5.632-84.48 16.896-25.6 11.264-47.616 26.624-66.048 46.08-18.432 19.456-32.768 41.984-42.496 67.584-9.728 25.6-14.848 52.736-14.848 81.92 0 29.184 4.608 56.32 14.336 81.92 9.216 25.6 23.04 48.128 41.472 67.584 18.432 19.456 40.448 34.816 66.048 46.08 25.6 11.264 53.76 16.896 84.48 16.896 30.72 0 58.88-5.632 84.48-16.896 25.6-11.264 47.616-26.624 66.048-46.08 18.432-19.456 32.768-41.984 42.496-67.584 9.728-25.6 14.848-52.736 14.848-81.92 0-29.184-4.608-56.32-14.336-81.92-9.216-25.6-23.04-48.128-41.472-67.584-18.432-19.456-40.448-34.816-66.048-46.08-25.6-11.264-54.272-16.896-84.992-16.896z m-273.92 0c-30.72 0-58.88 5.632-84.48 16.896-25.6 11.264-47.616 26.624-66.048 46.08-18.432 19.456-32.768 41.984-42.496 67.584-9.728 25.6-14.848 52.736-14.848 81.92 0 29.184 4.608 56.32 14.336 81.92 9.216 25.6 23.04 48.128 41.472 67.584 18.432 19.456 40.448 34.816 66.048 46.08 25.6 11.264 53.76 16.896 84.48 16.896 30.72 0 58.88-5.632 84.48-16.896 25.6-11.264 47.616-26.624 66.048-46.08 18.432-19.456 32.768-41.984 42.496-67.584 9.728-25.6 14.848-52.736 14.848-81.92 0-29.184-4.608-56.32-14.336-81.92-9.216-25.6-23.04-48.128-41.472-67.584-18.432-19.456-40.448-34.816-66.048-46.08-25.6-11.264-54.272-16.896-84.992-16.896z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">天猫</h3>
              </div>

              {/* 喜茶 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <div className="w-20 h-20 bg-[#1A1A1A] rounded-lg flex items-center justify-center mx-auto">
                    <svg
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                    >
                      <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#1A1A1A"></path>
                      <path
                        d="M512 286.72c-124.416 0-225.28 100.864-225.28 225.28S387.584 737.28 512 737.28 737.28 636.416 737.28 512 636.416 286.72 512 286.72z m0 389.12c-90.112 0-163.84-73.728-163.84-163.84S421.888 348.16 512 348.16 675.84 421.888 675.84 512 602.112 675.84 512 675.84z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M512 409.6c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4 102.4-46.08 102.4-102.4-46.08-102.4-102.4-102.4z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">喜茶</h3>
              </div>

              {/* 星巴克 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <div className="w-20 h-20 bg-[#00704A] rounded-lg flex items-center justify-center mx-auto">
                    <svg
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                    >
                      <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#00704A"></path>
                      <path
                        d="M512 286.72c-124.416 0-225.28 100.864-225.28 225.28S387.584 737.28 512 737.28 737.28 636.416 737.28 512 636.416 286.72 512 286.72z m0 389.12c-90.112 0-163.84-73.728-163.84-163.84S421.888 348.16 512 348.16 675.84 421.888 675.84 512 602.112 675.84 512 675.84z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M512 409.6m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">星巴克</h3>
              </div>

              {/* 瑞幸 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <div className="w-20 h-20 bg-[#0F1E36] rounded-lg flex items-center justify-center mx-auto">
                    <svg
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                    >
                      <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#0F1E36"></path>
                      <path
                        d="M512 307.2c-113.152 0-204.8 91.648-204.8 204.8s91.648 204.8 204.8 204.8 204.8-91.648 204.8-204.8-91.648-204.8-204.8-204.8z m0 358.4c-84.992 0-153.6-68.608-153.6-153.6s68.608-153.6 153.6-153.6 153.6 68.608 153.6 153.6-68.608 153.6-153.6 153.6z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M512 409.6c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4 102.4-46.08 102.4-102.4-46.08-102.4-102.4-102.4z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">瑞幸</h3>
              </div>

              {/* 饿了么 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <div className="w-20 h-20 bg-[#0095FF] rounded-lg flex items-center justify-center mx-auto">
                    <svg
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                    >
                      <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#0095FF"></path>
                      <path
                        d="M512 307.2c-113.152 0-204.8 91.648-204.8 204.8s91.648 204.8 204.8 204.8 204.8-91.648 204.8-204.8-91.648-204.8-204.8-204.8z m0 358.4c-84.992 0-153.6-68.608-153.6-153.6s68.608-153.6 153.6-153.6 153.6 68.608 153.6 153.6-68.608 153.6-153.6 153.6z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M512 409.6c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4 102.4-46.08 102.4-102.4-46.08-102.4-102.4-102.4z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">饿了么</h3>
              </div>

              {/* 美团 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <div className="w-20 h-20 bg-[#FFD100] rounded-lg flex items-center justify-center mx-auto">
                    <svg
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                    >
                      <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FFD100"></path>
                      <path
                        d="M512 307.2c-113.152 0-204.8 91.648-204.8 204.8s91.648 204.8 204.8 204.8 204.8-91.648 204.8-204.8-91.648-204.8-204.8-204.8z m0 358.4c-84.992 0-153.6-68.608-153.6-153.6s68.608-153.6 153.6-153.6 153.6 68.608 153.6 153.6-68.608 153.6-153.6 153.6z"
                        fill="#2E2E2E"
                      ></path>
                      <path
                        d="M512 409.6c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4 102.4-46.08 102.4-102.4-46.08-102.4-102.4-102.4z"
                        fill="#2E2E2E"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">美团</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">用户评价</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  看看其他用户如何评价 ExinEarn 水龙头
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "使用水龙头已经5年了，不知不觉中累积了12000多元的奖励。最棒的是我不需要改变购物习惯，只是从水龙头进入购物平台，价格完全一样，但能获得额外奖励。"
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-primary font-bold">张</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">张小姐</p>
                    <p className="text-xs text-muted-foreground">上海 | 使用5年</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "我是一个电商店主，经常需要大量采购。使用水龙头4年来，已经累积了超过15000元的奖励。这些都是正常采购之外的额外收入，对我的小生意帮助很大。"
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-primary font-bold">李</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">李先生</p>
                    <p className="text-xs text-muted-foreground">北京 | 使用4年</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "最初只是抱着试试看的心态，没想到坚持使用3年多，已经累积了8000多元奖励。现在我所有的网购都会通过水龙头，有时还能找到平台没有的优惠券，真的很实用！"
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-primary font-bold">王</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">王女士</p>
                    <p className="text-xs text-muted-foreground">广州 | 使用3年</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">常见问题</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  关于 ExinEarn 水龙头，您可能想知道的一切
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 mt-12">
              <div className="rounded-lg border p-6 shadow-sm hover:border-primary transition-colors">
                <h3 className="text-lg font-bold">ExinEarn 水龙头是如何运作的？</h3>
                <p className="mt-2 text-muted-foreground">
                  ExinEarn
                  水龙头与各大电商平台合作，当您通过我们的链接进行购物时，平台会给予我们一定的佣金，我们将大部分佣金以奖励的形式返还给您。价格与您直接在平台购买完全相同。
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm hover:border-primary transition-colors">
                <h3 className="text-lg font-bold">使用 ExinEarn 水龙头需要付费吗？</h3>
                <p className="mt-2 text-muted-foreground">
                  不需要。ExinEarn 水龙头完全免费使用，我们不收取任何会员费或服务费。
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm hover:border-primary transition-colors">
                <h3 className="text-lg font-bold">奖励什么时候到账？</h3>
                <p className="mt-2 text-muted-foreground">
                  一般情况下，订单确认收货的次月21号结算。不同平台的结算周期有所不同，具体以系统显示为准。
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm hover:border-primary transition-colors">
                <h3 className="text-lg font-bold">我邀请朋友能获得什么好处？</h3>
                <p className="mt-2 text-muted-foreground">
                  当您邀请朋友注册并使用 ExinEarn
                  水龙头，您将获得朋友订单奖励的额外分成。邀请越多，奖励越多，这是长期持续的额外收益来源。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">开始获取奖励</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  立即注册 ExinEarn 水龙头，享受购物奖励带来的额外收益
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-primary hover:bg-orange-50">
                  立即注册
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600">
                  了解更多
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2023 ExinEarn 水龙头. 保留所有权利。
            </p>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs text-muted-foreground hover:underline"
            >
              粤ICP备2020075053号-1
            </a>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              关于我们
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              隐私政策
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              使用条款
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              联系我们
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

