<template>
    <div>
        <!-- Header -->
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">Specialized Clinics</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">Home</router-link>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <router-link to="/services">Services</router-link>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <span>Specialized Clinics</span>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="py-20 bg-white">
            <div class="container mx-auto px-6">

                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                        Our Specialized Clinics
                    </h2>
                </div>

                <!-- Clinic Item -->
                <div class="clinic-row mb-16">
                    
                    <!-- LEFT: Image -->
                    <div class="clinic-image">
                        <img src="../../assets/img16.jpg" alt="Heart Clinic">
                    </div>

                    <!-- RIGHT: Description -->
                    <div class="clinic-content">
                        <h3 class="clinic-title">Heart Clinic</h3>
                        <span class="clinic-subtitle1">Cardiology</span>

                        <p class="clinic-text">
                            Expert care for heart and blood vessel conditions with specialist cardiologists.
                        </p>

                        <p class="clinic-doctors">
                            Doctors: Dr. John Mushi, Dr. Sarah Mohamed
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
/* ===== PAGE HEADER STYLES ===== */
.page-header {
    background: linear-gradient(135deg, #1e4b7c 0%, #0f2f4f 100%);
    padding: 120px 0 60px;
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.page-header::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    animation: rotate 30s linear infinite;
}

.page-header::after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    animation: rotate 25s linear infinite reverse;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.page-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
    letter-spacing: -0.02em;
}

.page-breadcrumb {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    position: relative;
    z-index: 2;
}

.page-breadcrumb a {
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    border-bottom: 1px solid transparent;
}

.page-breadcrumb a:hover {
    border-bottom-color: white;
}

.page-breadcrumb i {
    font-size: 0.75rem;
    opacity: 0.7;
}

/* ===== SECTION HEADER STYLES ===== */
.text-center.mb-12 {
    position: relative;
    margin-bottom: 2rem !important;
}

.text-center {
    text-align: center;
}
.text-center.mb-12 h2 {
    position: relative;
    display: inline-block;
    padding-bottom: 15px;
    font-size: 2.5rem;
    color: #0f2f4f;
    font-weight: 700;
}

.text-center.mb-12 h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #1e4b7c, #2e6ca3);
    border-radius: 3px;
}

.text-center.mb-12 p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #555;
    max-width: 600px;
    margin-top: 1rem;
}

/* ===== CLINIC ROW STYLES ===== */
.clinic-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    transition: all 0.3s ease;
}

/* Alternate layout for even rows */
.clinic-row:nth-child(even) {
    direction: rtl;
}

.clinic-row:nth-child(even) .clinic-content {
    direction: ltr;
}

/* ===== IMAGE STYLES ===== */
.clinic-image {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
}

.clinic-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(30, 75, 124, 0.2), rgba(30, 75, 124, 0.1));
    z-index: 1;
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.clinic-image:hover::before {
    opacity: 1;
}

.clinic-image:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 50px rgba(30, 75, 124, 0.2);
}

.clinic-image img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    transition: transform 0.6s ease;
    display: block;
}

.clinic-image:hover img {
    transform: scale(1.05);
}

/* ===== CONTENT STYLES ===== */
.clinic-content {
    background: #ffffff;
    padding: 40px;
    border-radius: 20px;
    border: 1px solid rgba(226, 232, 240, 0.8);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.clinic-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    transition: height 0.4s ease;
}

.clinic-content:hover::before {
    height: 100%;
}

.clinic-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 45px rgba(30, 75, 124, 0.1);
}

.clinic-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #0f2f4f;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    position: relative;
    padding-bottom: 10px;
}

.clinic-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #1e4b7c, #2e6ca3);
    border-radius: 3px;
}

.clinic-subtitle {
    display: inline-block;
    color: #1e4b7c;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 5px 12px;
    background: rgba(30, 75, 124, 0.08);
    border-radius: 30px;
    border: 1px solid rgba(30, 75, 124, 0.15);
}

.clinic-text {
    color: #475569;
    margin-top: 1.5rem;
    line-height: 1.8;
    font-size: 1rem;
}

.clinic-doctors {
    margin-top: 1.5rem;
    color: #0f2f4f;
    font-weight: 500;
    padding: 15px 0 0;
    border-top: 1px solid rgba(226, 232, 240, 0.8);
    display: flex;
    align-items: center;
    gap: 8px;
}

.clinic-doctors::before {
    content: '\f0f0';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #1e4b7c;
    font-size: 1rem;
}

/* ===== ADDITIONAL PROFESSIONAL TOUCHES ===== */
.bg-white {
    background-color: #ffffff;
    position: relative;
}

.bg-white::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 10px 10px, rgba(30, 75, 124, 0.02) 1px, transparent 1px);
    background-size: 30px 30px;
    pointer-events: none;
    opacity: 0.5;
}

/* ===== RESPONSIVE STYLES ===== */
@media (max-width: 1024px) {
    .page-title {
        font-size: 2.5rem;
    }
    
    .clinic-row {
        gap: 2rem;
    }
    
    .clinic-content {
        padding: 30px;
    }
    
    .clinic-title {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {
    .page-header {
        padding: 100px 0 40px;
    }
    
    .page-title {
        font-size: 2rem;
    }
    
    .text-center.mb-12 h2 {
        font-size: 2rem;
    }
    
    .text-center.mb-12 p {
        font-size: 1rem;
    }
    
    .clinic-row,
    .clinic-row:nth-child(even) {
        grid-template-columns: 1fr;
        direction: ltr;
        gap: 1.5rem;
    }
    
    .clinic-image img {
        height: 280px;
    }
    
    .clinic-content {
        padding: 25px;
    }
    
    .clinic-content::before {
        width: 0;
        height: 4px;
        transition: width 0.4s ease;
    }
    
    .clinic-content:hover::before {
        width: 100%;
        height: 4px;
    }
    
    .clinic-title {
        font-size: 1.8rem;
    }
}

@media (max-width: 480px) {
    .page-header {
        padding: 80px 0 30px;
    }
    
    .page-title {
        font-size: 1.8rem;
    }
    
    .page-breadcrumb {
        font-size: 0.9rem;
        flex-wrap: wrap;
    }
    
    .text-center.mb-12 h2 {
        font-size: 1.6rem;
    }
    
    .clinic-image img {
        height: 220px;
    }
    
    .clinic-content {
        padding: 20px;
    }
    
    .clinic-title {
        font-size: 1.5rem;
    }
    
    .clinic-text {
        font-size: 0.95rem;
    }
    
    .clinic-doctors {
        font-size: 0.9rem;
    }
}

/* ===== DARK MODE SUPPORT ===== */
@media (prefers-color-scheme: dark) {
    .bg-white {
        background-color: #0f172a;
    }
    
    .bg-white::before {
        background-image: radial-gradient(circle at 10px 10px, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    }
    
    .clinic-content {
        background: #1e293b;
        border-color: #334155;
    }
    
    .clinic-title {
        color: #f1f5f9;
    }
    
    .clinic-text {
        color: #cbd5e1;
    }
    
    .clinic-doctors {
        color: #f1f5f9;
        border-top-color: #334155;
    }
    
    .clinic-subtitle {
        background: rgba(255, 255, 255, 0.05);
        color: #f1f5f9;
        border-color: rgba(255, 255, 255, 0.1);
    }
}

/* ===== ANIMATIONS ===== */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.clinic-row {
    animation: fadeInUp 0.6s ease forwards;
}

.clinic-row:nth-child(1) { animation-delay: 0.1s; }
.clinic-row:nth-child(2) { animation-delay: 0.2s; }
.clinic-row:nth-child(3) { animation-delay: 0.3s; }
.clinic-row:nth-child(4) { animation-delay: 0.4s; }
.clinic-row:nth-child(5) { animation-delay: 0.5s; }

/* ===== PRINT STYLES ===== */
@media print {
    .page-header {
        background: none;
        color: black;
        padding: 40px 0;
    }
    
    .page-header::before,
    .page-header::after {
        display: none;
    }
    
    .clinic-image img {
        border: 1px solid #ddd;
    }
}
</style>