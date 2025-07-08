transform: rotate(-45deg);
  transition: 0.4s ease;
}

.card-link:hover .card-button {
  background: #5372F0;
  color: #fff;
}

/* Swiper Pagination */
.swiper-pagination-bullet {
  background: #5372F0;
  opacity: 0.5;
  width: 13px;
  height: 13px;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}

/* Swiper navigation buttons */
.swiper-button-prev,
.swiper-button-next {
  color: #5372F0;
  margin-top: 10px;
}

/* Responsive */
@media (max-width: 768px) {
  .row {
    gap: 10px;
  }
  .card-item {
    width: 230px;
    margin-right: 20px;
  }
}
