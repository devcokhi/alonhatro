import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> Alo Nhà trọ - Kênh thông tin nhà trọ, phòng trọ số 1 Việt Nam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Kênh thông tin cho thuê bất động sản nhà trọ, phòng trọ hàng đầu Việt Nam" />
        <p className="description">
         Alo Nhà Trọ - Kênh thông tin cho thuê bất động sản uy tín
Để có thể thu được lợi nhuận từ việc cho thuê bất động sản, chắc chắn không thể thiếu được khách hàng. Vậy một câu hỏi là tìm nguồn khách hàng ở đâu? Câu trả lời chính là Alo Nhà Trọ. Đây là kênh thông tin cho thuê bất động kết nối người cho thuê và người cần thuê. Khách hàng có thể đăng tải thông tin miễn phí trên trang web. Chỉ cần đầy đủ thông tin hình ảnh, đợi admin phê duyệt là sản phẩm của bạn sẽ được lên kệ. Với hơn 1 triệu lượng truy cập mỗi tháng, bạn có thể tiếp cận được với khách hàng mục tiêu với số lượng lớn. Về phía khách cho nhu cầu thuê, với hơn 20 nghìn bài đăng mỗi tháng, bạn có thể đa dạng sự lựa chọn.

Qua bài viết trên, hy vọng bạn đã trang bị được phần nào chút kinh nghiệm để đầu tư cho thuê bất động sản. <a href="https://alonhatro.com/">Alo Nhà Trọ</a> sẽ cùng đồng hành hỗ trợ các nhà đầu tư để kết nối với khách hàng tiềm năng.
        </p>
      </main>

      <Footer />
    </div>
  )
}
