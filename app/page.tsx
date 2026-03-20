import ClientLogic from "./components/ClientLogic";
import { client } from "../sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export const revalidate = 60; // Revalidate dynamic content every 60s

export default async function Home() {
  const products = await client.fetch(`*[_type == "product"] | order(_createdAt asc)`);

  return (
    <>
      <ClientLogic />
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <span>✅ Samsung Customer Service em Teresina, PI</span>
          <span>📞 Atendimento via WhatsApp</span>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <span className="logo-icon">S</span>
            <div className="logo-text">
              <strong>Samsung</strong>
              <small>Customer Service Teresina</small>
            </div>
          </div>
          <nav className="nav">
            <a href="#produtos">Produtos</a>
            <a href="#vantagens">Vantagens</a>
            <a href="#sobre">Sobre</a>
          </nav>

          <a
            href="https://wa.me/5586988387287?text=Ol%C3%A1!%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20Samsung."
            className="btn-header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-inner">
          <div className="hero-badge">🏷️ Descontos Exclusivos da Autorizada</div>
          <h1>
            Produtos Samsung com <span className="gradient-text">Preço Especial</span>
          </h1>
          <p className="hero-sub">
            Compre direto pela autorizada Samsung em Teresina com cupons
            exclusivos.<br />Garantia oficial, entrega Samsung e atendimento
            personalizado.
          </p>
          <div className="hero-ctas">
            <a href="#produtos" className="btn btn-primary">Ver Produtos</a>
            <a
              href="https://wa.me/5586988387287?text=Ol%C3%A1!%20Quero%20saber%20os%20pre%C3%A7os%20especiais%20dos%20produtos%20Samsung."
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar Preço Especial
            </a>
          </div>
          <div className="hero-trust">
            <div className="trust-item"><span>🛡️</span> Garantia Oficial Samsung</div>
            <div className="trust-item"><span>🚚</span> Entrega pela Samsung</div>
            <div className="trust-item"><span>💳</span> Pix e Cartão</div>
          </div>
          <div className="hero-seal">
            <img
              src="/images/selo-samsung-customer-service.png"
              alt="Prestando serviço à Samsung Customer Service"
              className="samsung-seal"
            />
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="benefits">
        <div className="container benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🏪</div>
            <h3>Autorizada Samsung</h3>
            <p>Loja oficial autorizada com acesso a cupons exclusivos</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🚚</div>
            <h3>Entrega Samsung</h3>
            <p>Receba em casa pela Samsung ou retire na loja</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🛡️</div>
            <h3>Garantia Oficial</h3>
            <p>Garantia Samsung de fábrica em todos os produtos</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💬</div>
            <h3>Atendimento Humano</h3>
            <p>Consultor dedicado para tirar suas dúvidas</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products" id="produtos">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🔥 Ofertas Exclusivas</span>
            <h2>Produtos com Desconto Especial</h2>
            <p>
              Preços exclusivos da autorizada Samsung em Teresina. Consulte as
              condições pelo WhatsApp.
            </p>
          </div>
          
          <div className="products-grid">
            {products.length === 0 ? (
              <div style={{ textAlign: "center", width: "100%", gridColumn: "1 / -1", padding: "40px" }}>
                <p>Nenhum produto cadastrado ainda no banco de dados.</p>
                <p>Acesse o painel <strong>/studio</strong> para adicionar seus produtos!</p>
              </div>
            ) : (
              products.map((product: any, index: number) => (
                <div className="product-card" data-aos="fade-up" data-aos-delay={index * 100} key={product._id || index}>
                  {product.badge && <div className={`product-badge ${product.isHot ? 'badge-hot' : product.isNew ? 'badge-new' : ''}`}>{product.badge}</div>}
                  <div className="product-image">
                    {product.image && (
                      <img src={urlFor(product.image).url()} alt={product.title} loading="lazy" />
                    )}
                  </div>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-desc">{product.description}</p>
                    <div className="product-price">
                      {product.originalPrice && <span className="price-original">{product.originalPrice}</span>}
                      <span className="price-discount">{product.discountText}</span>
                    </div>
                    <a href={product.whatsappMsg || `https://wa.me/5586988387287?text=Ol%C3%A1!%20Quero%20saber%20o%20pre%C3%A7o%20especial%20do%20${encodeURIComponent(product.title)}.`} className="btn btn-product" target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Quero Preço Especial
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="products-cta">
            <p>
              Não encontrou o que procura? Temos
              <strong>toda a linha Samsung</strong> com preço especial.
            </p>
            <a
              href="https://wa.me/5586988387287?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20outros%20produtos%20Samsung%20com%20desconto."
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              >Consultar Outros Produtos</a
            >
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works" id="vantagens">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">✨ Simples e Rápido</span>
            <h2>Como Funciona</h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Escolha o Produto</h3>
              <p>Navegue pelo catálogo e escolha o produto Samsung que deseja</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Fale no WhatsApp</h3>
              <p>Clique no botão e receba o preço especial com cupom exclusivo</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Compre com Desconto</h3>
              <p>
                Finalize a compra no site Samsung com pagamento seguro via Pix ou
                cartão
              </p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Receba em Casa</h3>
              <p>
                A Samsung entrega direto na sua casa ou retire na loja autorizada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Trust */}
      <section className="about" id="sobre">
        <div className="container about-inner">
          <div className="about-content">
            <span className="section-tag">👤 Sua Consultora</span>
            <h2>Atendimento Personalizado</h2>
            <p>
              Sou consultora do Samsung Customer Service em Teresina com acesso a
              <strong>cupons exclusivos</strong> que garantem preços especiais em
              toda a linha Samsung.
            </p>
            <p>
              Ao comprar comigo, você tem a segurança de uma
              <strong>compra oficial Samsung</strong>, com nota fiscal, garantia
              de fábrica e suporte técnico autorizado.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <span>✅</span> Samsung Customer Service
              </div>
              <div className="about-feature">
                <span>✅</span> Cupons exclusivos da loja
              </div>
              <div className="about-feature">
                <span>✅</span> Compra 100% segura via Samsung
              </div>
              <div className="about-feature">
                <span>✅</span> Nota fiscal e garantia oficial
              </div>
              <div className="about-feature">
                <span>✅</span> Entrega Samsung ou retirada na loja
              </div>
              <div className="about-feature">
                <span>✅</span> Pagamento via Pix ou cartão
              </div>
            </div>
            <a
              href="https://wa.me/5586988387287?text=Ol%C3%A1!%20Vi%20o%20site%20e%20gostaria%20de%20conversar%20sobre%20produtos%20Samsung."
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              >Falar com a Consultora</a
            >
          </div>
          <div className="about-card">
            <div className="trust-card">
              <div className="trust-card-header">
                <div className="trust-avatar">FS</div>
                <div>
                  <strong>Fernanda Sena</strong>
                  <span>Consultora Samsung</span>
                </div>
              </div>
              <div className="trust-stats">
                <div className="trust-stat">
                  <strong>Customer Service</strong>
                  <span>Samsung Teresina</span>
                </div>
                <div className="trust-stat">
                  <strong>Atendimento</strong>
                  <span>Seg-Sáb 8h-18h</span>
                </div>
                <div className="trust-stat">
                  <strong>Localização</strong>
                  <span>Teresina, PI</span>
                </div>
              </div>
              <div className="trust-seal">
                <img
                  src="/images/selo-samsung-customer-service.png"
                  alt="Samsung Customer Service"
                  className="samsung-seal-small"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">❓ Dúvidas</span>
            <h2>Perguntas Frequentes</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>É seguro comprar por aqui?</h3>
              <p>
                Sim! A compra é feita diretamente no site oficial da Samsung. Eu
                apenas aplico um cupom exclusivo que garante um preço melhor.
              </p>
            </div>
            <div className="faq-item">
              <h3>Como funciona a garantia?</h3>
              <p>
                A garantia é oficial Samsung, como qualquer compra feita no site
                deles. Você pode acionar a assistência em qualquer autorizada do
                Brasil.
              </p>
            </div>
            <div className="faq-item">
              <h3>Quais formas de pagamento?</h3>
              <p>
                Pix e cartão de crédito (com parcelamento), diretamente no site da
                Samsung.
              </p>
            </div>
            <div className="faq-item">
              <h3>Como recebo o produto?</h3>
              <p>
                A Samsung entrega diretamente na sua casa ou, se preferir, você
                pode retirar na loja autorizada em Teresina.
              </p>
            </div>
            <div className="faq-item">
              <h3>Por que o preço é mais barato?</h3>
              <p>
                Como consultora do Samsung Customer Service, tenho acesso a cupons
                exclusivos que não estão disponíveis ao público em geral.
              </p>
            </div>
            <div className="faq-item">
              <h3>Posso comprar qualquer produto Samsung?</h3>
              <p>
                Sim! Toda a linha Samsung está disponível. Se não encontrar o
                produto aqui, é só me chamar no WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">S</span>
              <div className="logo-text">
                <strong>Samsung</strong>
                <small>Customer Service Teresina</small>
              </div>
            </div>
            <p>
              Produtos Samsung com preço especial direto da autorizada em
              Teresina, PI.
            </p>
          </div>
          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <a href="#produtos">Produtos</a>
            <a href="#vantagens">Como Funciona</a>
            <a href="#sobre">Sobre</a>
          </div>
          <div className="footer-contact">
            <h4>Contato</h4>
            <a href="https://wa.me/5586988387287" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <p>Teresina, PI</p>
            <p>Seg-Sáb 8h-18h</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>
              Prestando serviço à Samsung Customer Service. Todos os produtos são
              vendidos através do site oficial Samsung.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5586988387287?text=Ol%C3%A1!%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20Samsung."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
